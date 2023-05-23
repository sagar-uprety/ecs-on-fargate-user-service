################################################################################
# Input variables for the main.tf file
################################################################################

variable "environment" {
  description = "Working application environment eg: dev, stg, prd"
  type        = string
  default     = "dev"
}

variable "application" {
  description = "Name of the application"
  type        = string
  default     = "adex-devops-competency"
}

variable "owner" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = "adex"
}

variable "region" {
  description = "Region be used for all the resources"
  type        = string
  default     = "us-east-1"
}
