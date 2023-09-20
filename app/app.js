// user-service.js
const express = require("express");
const app = express();
const port = 3000;
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  PutCommand,
  ScanCommand,
  GetCommand,
  DynamoDBDocumentClient,
} = require("@aws-sdk/lib-dynamodb");
const fs = require("fs");

const awsRegion = process.env.awsRegion || "us-east-2";
const dynamodbTableName = process.env.dynamodbTableName || "ecs-users-ms";

const client = new DynamoDBClient({ region: awsRegion });
const docClient = DynamoDBDocumentClient.from(client);

app.get("/users", async (req, res) => {
  try {
    const usersData = await checkIfDataExists();
    res.json(usersData);
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
  }
});


// Route to insert data for seeding the DynamoDB table
app.get("/users/insertuserdata", async (req, res) => {
  try {
    // Check if the data already exists in the DynamoDB table
    const existingData = await checkIfDataExists();
    if (existingData.length > 0) {
      return res
        .status(200)
        .json({
          message: "Data already exists in the table. No action required.",
        });
    }

    // If data doesn't exist, read the data from users.json file
    const userData = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));
    // console.log(userData);

    // Loop through each user record and insert it into the DynamoDB table
    for (const user of userData) {
      const command = new PutCommand({
        TableName: dynamodbTableName,
        Item: {
          id: user.id.toString(),
          name: user.name ,
          email: user.email ,
          address: user.address ,
          phone: user.phone ,
        },
      });

      try {
        await docClient.send(command);
        console.log(`Inserted user with ID ${user.id} into DynamoDB`);
      } catch (error) {
        console.error(
          `Error inserting user with ID ${user.id}: ${error.message}`
        );
      }
    }

    res.status(200).json({ message: "Data insertion completed." });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get user data by ID from DynamoDB
app.get("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const command = new GetCommand({
      TableName: dynamodbTableName, // Replace with your DynamoDB table name
      Key: {
        id: userId,
      },
    });

    const response = await docClient.send(command);

    if (response.Item) {
      res.status(200).json(response.Item);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
});

async function checkIfDataExists() {
  const scanCommand = new ScanCommand({
    TableName: dynamodbTableName,
  });

  const response = await docClient.send(scanCommand);
  return response.Items || [];
}

app.listen(port, () => {
  console.log(`User service is running on port ${port}`);
});
