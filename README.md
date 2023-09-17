# microservice-mini-project
# Microservice Mini Blog Project

This project is a microservice-based mini blog system designed to allow users to create posts and add comments to existing posts. The application is composed of six individual services, each running on separate ports.

## Services

1. **Post Service**: Manages the creation and retrieval of posts.
2. **Comment Service**: Handles the creation and retrieval of comments related to posts.
3. **Dockerization**: The entire project has been containerized using Docker and is configured through the `Dockerfile`. Each service runs in a separate container.
4. **Orchestration with Kubernetes**: Kubernetes is used to manage the deployment and scaling of the containers. This ensures the application's availability and scalability.
5. **Skaffold for Continuous Deployment**: Skaffold is employed to automate the build and deployment process. It monitors for changes in the codebase and automatically updates the container images and deploys them to the pods within the cluster.
6. **Service Event Bus**: A custom event bus built from scratch using Express.js is used to facilitate communication between the services. This ensures that services can interact without being tightly coupled to one another.

## Running the Application

To start the application, simply execute the following command:


"skaffold dev"


This will initiate the deployment process and set up the necessary services and pods within the Kubernetes cluster.

## Stopping the Application

To stop the project, press `Ctrl + C` in the terminal where `skaffold dev` is running.

---

With this setup, the services are designed to be independent of each other. If one service experiences an issue or goes down, it won't result in a system-wide failure. This microservice architecture enhances the reliability and scalability of the application.
