# [GuideMe](https://guideme-dockerized.herokuapp.com/)

A Services reviews web App. This a fullstack-single-page App using MERN stack.
This repository includes both the Backend and Frontend (client directory)
> **_Update:_** Docker is Here! The application now is containerized. All test cases are run in the Container, and the whole application is deployed as a docker container.

> **_NOTE:_**  The Appliction still lacks some styling and aesthetics. 

## Tech Stack

### Backend and Database
- Express.js
- Mongoose for MongoDB schema validation and type casting
- JsonWebToken and Bcrypt for authentication and password hashing
- Jest for Testing

### Frontend 
- Create-React-App for a simple setup for React configurations
- React-Router for client-side routing
- Axios for HTTP client
- MaterialUI for styling

### Tools
- Docker
- Github Action for CI/CD
- Eslint for code styling
- Heroku (Deployment platform)

## Launching The APP
To launch the App on your local machine: 
  - Clone the repository 
  - Make sure that you have Docker installed on your local machine
  - Run the following command with the right args in the Project's root directory
    ```
    docker build -t guideme . \
    --build-arg MONGODB_URI="Your MongoDb URI" \
    --build-arg SECRET="Your Secret Word for token Generation" \
    --build-arg MONGODB_URI_TEST="Your MongoDB-Testing database for running tests"
    ```
  - Run the Following command (Replce PORT with an available port on your machine)
    ```
    docker run -p PORT:3003 guideme
    ```
  - Congratulations! The application is running now on PORT
