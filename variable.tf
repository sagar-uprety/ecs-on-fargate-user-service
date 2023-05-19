################################################################################
# Input variables for the main.tf file
################################################################################
variable "namespace" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = "adex"
}

variable "region" {
  description = "Region be used for all the resources"
  type        = string
  default     = "us-east-1"
}