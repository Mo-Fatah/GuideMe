# GuideMe
A Services reviews web App. This a fullstack-single-page App using MERN stack.
This repository includes both the Backend and Frontend (client directory)

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
- Github Action for CI/CD
- Eslint for code styling
- Heroku (Deployment platform)

## Launching The APP
To launch the App in your local machine: 
  - first clone the Repository 
  - `npm install && cd client && npm install` 
  - create `.env` file in the root directory and provide the following 
   ```bash
    MONGODB_URI='Your MongoDB URI'
    SECRET='Your Secret word for Token generation'
    MONGODB_URI_TEST='Your MongoDB-Testing database for running tests'
   ```
  - launch the server in dev mode by `npm run dev`
  - launch the frontend by `npm start` from the client directory

## Final Note
This my first fullstack project, I really appreciat your feedback and I am really welcoming any notes to make a progress in my journey as a Software Engineer. 
