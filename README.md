# Sample Fullstack Application

## Prerequisites
- **Docker**: Ensure Docker is installed on your system. You can download and install Docker from [Docker's official website](https://www.docker.com/get-started).

## Steps to Run the Project

### 1. Clone the Repository

`git clone <repository-url>`
`cd <repository-directory>` 

### 2. Set Up Environment Variables (if necessary)

-   If your application requires environment variables create a `.env` file in the root of the repository. Use `.env.example` provided in the repository as a template.
-   Modify `.env` file as per your environment configuration.

### 3. Create GitHub Personal Access Token (PAT)

Generate a GitHub Personal Access Token (PAT) named `GHCR_PAT` with the following permissions:
- `read:packages` for accessing packages in GitHub Container Registry (GHCR).

To generate the token:
1. Go to your GitHub account.
2. Navigate to `Settings` > `Developer settings` > `Personal access tokens`.
3. Click on `Generate new token`.
4. Give your token a name (e.g., `GHCR_PAT`).
5. Select the scope or permissions (`read:packages` and `write:packages`).
6. Click `Generate token`.
7. **Important:** Copy the generated token. You won't be able to see it again!

### 4. Add PAT to GitHub Actions Secrets

To securely use your `GHCR_PAT` in GitHub Actions workflows, you need to add it as a repository secret:

1. Go to your GitHub repository.
2. Click on `Settings` tab.
3. In the left sidebar, click on `Secrets`.
4. Click on `New repository secret`.
5. Name the secret `GHCR_PAT`.
6. Paste the generated PAT into the `Value` field.
7. Click `Add secret`.

Now, your GitHub Actions workflows can securely access Docker images from GitHub Container Registry using the `GHCR_PAT` token.

### 5. Run Docker Compose

-   Ensure you have the `docker-compose.yml` file at the root of your repository.

`docker-compose up` 

This command will:

-   Pull required Docker images from GitHub Packages.
-   Build and start all services defined in the `docker-compose.yml` file.

### 6. Access the Application

-   Once Docker Compose has successfully started all services, you should be able to access your application:
    -   **Frontend**: Open a web browser and go to `http://localhost:3000
    -   **Backend**: API endpoints should be accessible at `http://localhost:4000

### 7. Stopping the Application

-   To stop the application and shut down all services:

`docker-compose down` 

## Notes

-   **Troubleshooting**: If you encounter issues during setup or running the application, check Docker logs (`docker-compose logs`) for error messages.
-   **Customization**: Modify the `docker-compose.yml` or `.env` files as needed to suit different environments or configurations.