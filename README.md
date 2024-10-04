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
- - [How to use App](#frontend-setup-and-installation)

## Backend Overview

The backend of CoursesApp is designed to handle requests from the frontend, manage user authentication, and interact with the database to perform CRUD operations on course data. It is built using Node.js with Express and connects to a MongoDB database.

## Technologies Used


- **Next.js**: A React-based framework for building user interfaces and handling server-side rendering.
-**NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
-**MongoDB**: A NoSQL database for data storage.
-**Mongoose**: An ODM (Object Data Modeling) library for MongoDB and NestJS.
-**JWT**: (JSON Web Tokens): For user authentication.
-**Bcrypt**: For hashing passwords.
-**Axios**: A promise-based HTTP client for making requests from the frontend (Next.js) to the backend (NestJS).

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

JWT_SECRET=your_jwt_secret
JWT_EXPIRATION_TIME= time-expiration 
MONGODB_URI=your_mongodb_connection_string

```
### Start the server:

```bash

    npm run start

    Access the API: The backend should now be running at http://localhost:4000.
```
### API Endpoints
# Authentication

    POST /api/auth/register: Register a new user.
    POST /api/auth/login: Log in an existing user.
    POST /api/auth/refresh: Refreshing token .
    

# Courses

    GET /api/courses: Retrieve some courses for uesers not already registred.
    POST /api/courses: Retrieve a list of courses with limit course of any request .
    POST /api/courses/create: Create a new course.
    POST /api/courses/upload: for upload a list of courses that you have.
    Post /api/courses/search: it has two option searching by title or teacher and retrieve 10 courses of any request 
    
    
    

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

    Next.js: A React-based framework for building user interfaces and handling server-side rendering.
    useContext: A React hook for managing global state across the application.
    Axios: A promise-based HTTP client for making requests from the frontend.
    Tailwind CSS: A utility-first CSS framework for building custom, responsive designs.

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

    npm run dev

```
Access the application: The frontend should now be running at http://localhost:3000.



# User Guide for the Course Management App

## Using the Application

### Step 1: Sign Up
1. Open your browser and go to `http://localhost:3000/auth` to access the signup page.
2. Fill in the required fields to create a new account.
3. After submitting the signup form, you will be redirected to the login page.

### Step 2: Sign In
1. After signing up, you will be redirected to the login page.
2. Enter your credentials (email and password) and click on the **Sign In** button.
3. Upon successful authentication, you will be redirected to the main dashboard.

### Step 3: Browse Courses
1. Once logged in, you can view all available courses on the main dashboard.
2. The courses are displayed using **infinite scrolling**, allowing you to scroll through the list without pagination.
3. You can create a new course by clicking on the **Create Course** button.
4. To view more details about a course, click on the **View Course** button.

### Step 4: Search for Courses
1. Use the search bar available on the dashboard to find courses by **title** or **teacher**.
2. Type in the relevant keywords and press **Enter** or click the search button to see the filtered results with **infinite scrolling**.


