
# Bookstore Backend

This is a simple backend application for a bookstore, built using **Node.js**, **Express**, and **MongoDB**. The backend supports basic **CRUD** operations to manage books, with added **authentication** and **authorization** functionalities.

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

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/bookstore-backend.git
   cd bookstore-backend
   ```

2. **Install the dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Create a `.env` file** in the root of the project and add the following variables:

   ```plaintext
   JWT_SECRET=your_jwt_secret_key
   MONGO_URI=your_mongo_database_uri
   PORT=your_preferred_port
   ```

## API Endpoints

### Books

- **POST** `/api/books/add`: Create a new book.

  - **Body**: `{ title: String, author: String, price: Number }`
  - **Returns**: Created book object.

- **GET** `/api/books/getbooks`: Get all books.

  - **Returns**: List of all books.

- **GET** `/api/books/getbook/:id`: Get a specific book by its ID.

  - **Params**: `id` (book's MongoDB ObjectId)
  - **Returns**: Book object.

- **PUT** `/api/books/update/:id`: Update a book by its ID.

  - **Params**: `id` (book's MongoDB ObjectId)
  - **Body**: `{ title: String, author: String, price: Number }`
  - **Returns**: Updated book object.

- **DELETE** `/api/books/delete/:id`: Delete a book by its ID.

  - **Params**: `id` (book's MongoDB ObjectId)
  - **Returns**: Deleted book object.

### Authentication

- **POST** `/api/auth/login`: Login with username and password to get a JWT.

  - **Body**: `{ username: String, password: String }`
  - **Returns**: JWT token.

- **POST** `/api/auth/register`: Register a new user (e.g., admin).

  - **Body**: `{ username: String, password: String, role: 'user' | 'admin' }`
  - **Returns**: User object.

## Security

- Passwords are hashed using **bcryptjs** for secure storage.
- **JWT** is used to authenticate and authorize users, ensuring that only authorized users can access certain routes.

## Deployment

To deploy this project, you can use platforms such as **Heroku**, **Render**, or **DigitalOcean**. Ensure to set the environment variables (`JWT_SECRET`, `MONGO_URI`, `PORT`) on the deployment platform.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request. Ensure that all new features are well-documented, and test thoroughly.
