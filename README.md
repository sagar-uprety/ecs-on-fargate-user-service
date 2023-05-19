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

content = """
Install terraform-docs or download from terraform-docs github repo.

# Generate README.md file with .pre-commit-config.yaml configuration
# go1.17+
`go install github.com/terraform-docs/terraform-docs@v0.16.0`


2. Configure a default configuration file named .terraform-docs.yml that can be used for all README.md generation. Add below content for some better customisations:

``` yaml
formatter: "markdown table" # this is requiredversion: "0.16"header-from: main.tf
footer-from: ""recursive:
  enabled: false
  path: ""sections:
  hide: []
  show: []  hide-all: false # deprecated in v0.13.0, removed in v0.15.0
  show-all: true  # deprecated in v0.13.0, removed in v0.15.0content: |-
  {{ .Requirements }}  ## Usage
  Basic usage of this module is as follows:```hcl
  module "example" {
    {{"\t"}} source  = "<module-path>"{{- if .Module.RequiredInputs }}
    {{"\n\t"}} # Required variables
    {{- range .Module.RequiredInputs }}
    {{"\t"}} {{ .Name }}  = {{ .GetValue }}
    {{- end }}
    {{- end }}{{- if .Module.OptionalInputs }}
    {{"\n\t"}} # Optional variables
    {{- range .Module.OptionalInputs }}
    {{"\t"}} {{ .Name }}  = {{ .GetValue | printf "%s" }}
    {{- end }}
    {{- end }}
  }
  ```{{ .Resources }}{{ .Inputs }}{{ .Outputs }}output:
  file: README.md
  mode: inject
  template: |-
      <!-- BEGIN_AUTOMATED_TF_DOCS_BLOCK -->
      {{ .Content }}
      <!-- END_AUTOMATED_TF_DOCS_BLOCK -->output-values:
  enabled: false
  from: ""sort:
  enabled: true
  by: namesettings:
  anchor: true
  color: true
  default: true
  description: true
  escape: true
  hide-empty: false
  html: true
  indent: 2
  lockfile: true
  read-comments: true
  required: true
  sensitive: true
  type: true
  ```

3. In this step, we will setup/configure README.md in the TF codebase:

    Create a README.md inside terraform modules and provide some introductory details about modules. Refer below README.md

# TF code base## Introduction
This is sample readme for terraform module

    Add the comment blocks where you want to auto-generate the different sections of terraform module. If required, we can keep a footer message that will not be changed.

# TF code base## Introduction
This is sample readme for terraform module
<!-- BEGIN_AUTOMATED_TF_DOCS_BLOCK -->
<!-- END_AUTOMATED_TF_DOCS_BLOCK -->


3. Now we are ready to auto generate the documentation!

`terraform-docs -c .terraform-docs.yml ./tf-code/`

After the execution observe the README.md file updated in the given tf-code directory.
## Contributing

Contributions are welcome! Please Create [CONTRIBUTING.md](CONTRIBUTING.md) for more information about the contribution in the project

