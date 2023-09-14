locals {
  name           = "user_service"
  project        = "ecs-module-lms"
  container_name = "user"
  container_port = 3000
  tags = {
    Name    = local.name,
    Project = local.project
  }
}
