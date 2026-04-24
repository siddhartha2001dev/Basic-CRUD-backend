# 🚀 Basic CRUD Backend (Node.js + Express + MongoDB)

## 📌 Project Overview

This is a simple **CRUD (Create, Read, Update, Delete)** backend application built using **Node.js, Express, and MongoDB**.
It allows users to manage data (like tasks/todos) through RESTful APIs.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API

---

## 📁 Project Structure

```
todoCRUD/
│── src/
│   ├── config/
│   │   └── dbConnect.js
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── todoSchema.js
│   ├── routes/
│   │   └── todoRoute.js
│── server.js
│── package.json
│── .gitignore
```

---

## 🚀 Features

* ✅ Create new data
* 📖 Read all data / single data
* ✏️ Update existing data
* ❌ Delete data
* 🌐 RESTful API structure

---

## 🔌 API Endpoints

| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| GET    | /        | Get all items   |
| GET    | /:id     | Get single item |
| POST   | /        | Create new item |
| PUT    | /:id     | Update item     |
| DELETE | /:id     | Delete item     |

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Basic-CRUD-backend.git
```

### 2️⃣ Navigate to project

```bash
cd Basic-CRUD-backend
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Setup environment variables

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

### 5️⃣ Run the server

```bash
npm start
```

---

## 📸 Output

Server will run on:

```
http://localhost:8000
```

---

## 🧠 Learning Highlights

* Understanding of CRUD operations
* REST API development
* MongoDB integration using Mongoose
* Backend project structuring

---

## 👨‍💻 Author

**Siddhartha Banerjee**

---

## ⭐ Contribute

Feel free to fork this repo and improve it!

---
