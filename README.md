# Terraform default template module

Terraform default template module is a useful starting point for those who frequently use Terraform for their projects. Its pre-written required files and format of code saves time and effort and provides a consistent structure for all Terraform projects.


## Prerequisites

- Terraform version: `x.x.x`
- Provider: `provider_name`

## Getting Started

1. Clone the repository.
2. Run `terraform init` to initialize the provider and modules.
3. Create a `terraform.tfvars` file and fill in the required variables.
4. Run `terraform plan` to see the changes that will be made.
5. Run `terraform apply` to apply the changes.

## Project Structure

- `main.tf`:  This file is executed by Terraform to create, modify, or destroy the resources defined in it.
- `variables.tf`: Variables can be used for a variety of purposes such as storing sensitive information, providing inputs to resources, or defining defaults for a module.
- `versions.tf`: The versions.tf file in Terraform is used to set constraints on the Terraform version required for working with the configuration files. 
- `provider.tf`: The provider blocks in Terraform configuration files represent the cloud infrastructure or services that be managed by Terraform. Providers allow Terraform to deploy and manage resources in different cloud environments such as AWS, Azure, Google Cloud Platform, and more.
- `outputs.tf`: Description of what this file does.
- `.gitignore`: List of files to ignore in version control.
- `.pre-commit-config.yaml`: Configuration file for pre-commit hooks.

## Contributing

Contributions are welcome! Please Create [CONTRIBUTING.md](CONTRIBUTING.md) for more information about the contribution in the project

