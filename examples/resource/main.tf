terraform {
  required_providers {
    null = {
      source  = "hashicorp/null"
      version = "~> 4.0"
    }
  }
}

resource "null_resource" "example" {
  # Your resource configuration goes here
}


