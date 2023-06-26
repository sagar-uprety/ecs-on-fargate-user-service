terraform {
  backend "s3" {
    bucket         = "terraform-module-state-files"
    key            = "examples/complete/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-module-state-files"
  }
}
