# CoursesApp

CoursesApp is a comprehensive course management system that allows users to create, manage, and track courses efficiently. This document provides an overview of the backend and frontend architecture, setup, and usage.

## Table of Contents

- [Backend Overview](#backend-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Frontend Overview](#frontend-overview)
- [Frontend Technologies Used](#frontend-technologies-used)
- [Frontend Setup and Installation](#frontend-setup-and-installation)
- [Contributing](#contributing)
- [License](#license)

## Backend Overview

The backend of CoursesApp is designed to handle requests from the frontend, manage user authentication, and interact with the database to perform CRUD operations on course data. It is built using Node.js with Express and connects to a MongoDB database.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For user authentication.
- **Bcrypt**: For hashing passwords.

## Setup and Installation

To set up the backend locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mhaddaou/CoursesApp.git
   cd CoursesApp/backend


### Install Dependencies

```bash
npm install
```

### Set environment variables: Create a .env file in the root directory and define the following variables:

```makefile

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
### Start the server:

```bash

    npm start

    Access the API: The backend should now be running at http://localhost:3000.
```
### API Endpoints
# Authentication

    POST /api/auth/register: Register a new user.
    POST /api/auth/login: Log in an existing user.

# Courses

    GET /api/courses: Retrieve all courses.
    GET /api/courses/
    : Retrieve a course by ID.
    POST /api/courses: Create a new course.
    PUT /api/courses/
    : Update a course by ID.
    DELETE /api/courses/
    : Delete a course by ID.

# Users

    GET /api/users: Retrieve all users (admin only).
    GET /api/users/
    : Retrieve a user by ID.
    PUT /api/users/
    : Update a user by ID (admin only).
    DELETE /api/users/
    : Delete a user by ID (admin only).

# Database Schema

The application uses a MongoDB database with the following collections:

    Users: Stores user information (username, email, password).
    Courses: Stores course details (title, description, instructor, duration).

# Testing

To run tests, you can use Jest. Make sure to have the testing dependencies installed:

```bash

npm install --save-dev jest supertest
```
Run the tests using:

```bash

npm test
```
### Frontend Overview

The frontend of CoursesApp provides a user interface for students and instructors to interact with the system. It is built using React and offers a responsive and user-friendly design.
Frontend Technologies Used

    React: A JavaScript library for building user interfaces.
    Redux: State management library for JavaScript applications.
    Axios: Promise-based HTTP client for the browser and Node.js.
    Bootstrap: CSS framework for responsive design.

Frontend Setup and Installation

To set up the frontend locally, follow these steps:

# Clone the repository:

    ```bash

git clone https://github.com/mhaddaou/CoursesApp.git
cd CoursesApp/frontend
```
# Install dependencies:

```bash

npm install
```
# Start the development server:

```bash

npm start
```
Access the application: The frontend should now be running at http://localhost:3000.
