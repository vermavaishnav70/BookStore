# Bookstore Backend

This is a simple backend application for a bookstore, built using **Node.js**, **Express**, and **MongoDB**. The backend supports basic **CRUD** operations to manage books, with the added functionality of **authentication** and **authorization**.

## Features

- **CRUD operations** for managing books (Create, Read, Update, Delete)
- **Authentication** with JWT (JSON Web Tokens)
- **Authorization** for admin users
- Database management using **MongoDB** via **Mongoose**

## Tech Stack

- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database used for storing book data.
- **Mongoose**: ODM (Object Document Mapper) for MongoDB and Node.js.
- **JWT**: For secure authentication and authorization.
- **bcryptjs**: For hashing passwords securely.
- **dotenv**: To manage environment variables.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bookstore-backend.git
   cd bookstore-backend
   ```
2.Install the dependencies:

If you're using npm:
```
npm install
```
If you're using yarn:

yarn install
Create a .env file in the root of the project and add the following variables:

JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongo_database_uri
PORT=your_preferred_port
