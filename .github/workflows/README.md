# Github Actions Workflow for Terraform

This GitHub Actions workflow runs when changes are pushed or pulled to "main". The workflow has two jobs: `lint` and `plan_or_apply`.

## Lint Job

The `lint` job has several steps:

1. Check out the code.
2. Set up Terraform and run `terraform fmt --check`.
3. Initialize Terraform, perform a security scan with Checkov, and validate Terraform configurations with `terraform validate -no-color`.
4. Run `tfsec` for a security scan.
5. Set up Infracost and check out the base branch.
6. Generate an Infracost cost estimate alongside generating the Infracost diff on PR branch.
7. Post an Infracost comment if the Infracost diff outcome is 'success' and the event is pull_request.

## Plan_or_Apply Job

The `plan_or_apply` job has several steps:

1. Check out the code.
2. Set up git repo credentials for Terraform modules and set up Terraform.
3. Initialize Terraform and run `terraform plan`.
4. If the plan is successful, upload the plan file, show the plan, and post the plan to the GitHub PR for review.
5. If the plan fails, post the output to the GitHub PR.
6. If the apply is successful, post the apply output to the GitHub PR.
7. If the apply fails, post the apply output to the GitHub PR.

This workflow incorporates Terraform, Checkov, tfsec, and Infracost to validate, scan, and estimate the cost of infrastructure changes before being merged.