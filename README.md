# Trello-lite Project Management App

A full-stack **Trello-lite Project Management App** built using the **MERN** (MongoDB, Express.js, React.js, Node.js) stack. Users can register, log in, and manage their tasks securely. The application includes authentication, authorization, pagination, and input validation for an improved user experience.

---

## Features

✅ **User Authentication** – Secure JWT-based authentication for user accounts.  
✅ **Task Management** – Perform **Create, Read, Update, Delete (CRUD)** operations on tasks.  
✅ **Authorization** – Users can only manage their own tasks.  
✅ **Pagination** – Efficient task listing with pagination for better performance.  
✅ **Input Validation** – Secure and structured input handling using `Validator`.  

----

## Technologies Used

### Frontend (React.js + Vite)

- **React.js** – Frontend library for building UI.
- **Vite** – Fast build tool for React development.
- **React Router** – Client-side routing for seamless navigation.
- **Formik** – Simplified form handling and validation.
- **Axios** – API calls to communicate with the backend.
- **Tailwind CSS** – Modern and responsive UI design.

### Backend (Node.js + Express.js)

- **Express.js** – Lightweight Node.js framework for API handling.
- **MongoDB + Mongoose** – NoSQL database for storing tasks and user data.
- **bcrypt** – Secure password hashing for authentication.
- **JWT (JSON Web Tokens)** – Secure user authentication and session management.

---

## Getting Started

### 1. Clone the Repository

```sh
 
```
https://github.com/pratikshinde1/Trello-lite-Project-Management-App
---

### 2. Backend Setup

Navigate to the **server** directory:

```sh
cd server
```

Install dependencies:

```sh
npm install
```

Create a **.env** file and configure your environment variables:

```env
PORT=4005
MONGO_URI=your_mongodb_connection_string
 
```

Start the backend server:

```sh
npm run dev
```

---

### 3. Frontend Setup

Navigate to the **client** directory:

```sh
cd client
```

Install dependencies:

```sh
npm install
```

Start the React development server:

```sh
npm run dev
```

---

 

## How to Use

1. **Sign Up / Log In** – Create an account or log in with existing credentials.
2. **Create a Task** – Add a new task with a **title, description, and status**.
3. **Edit / Delete Tasks** – Modify or remove your own tasks.
4. **Pagination** – View tasks efficiently with pagination support.

---

