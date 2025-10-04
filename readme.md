# 💰 Personal Finance Tracker API

A fully functional **Personal Finance Tracker REST API** built with **Node.js, Express, MongoDB, and JWT authentication**.  
This API allows users to manage their income and expenses, organize transactions by category, upload profile pictures, and view monthly summaries.  
It also includes **role-based access control** with user and admin roles.

---

## ✨ Features

- 🔑 **User Authentication**
  - Register, Login, and Profile
  - JWT-based auth with role support (`user | admin`)
  - Password hashing using bcrypt

- 💸 **Transactions**
  - Add, edit, delete, and list transactions
  - Organize by categories
  - View monthly summaries (income, expenses, net balance)

- 🗂️ **Categories**
  - Predefined categories (`Food, Rent, Transport, Salary...`)
  - Support for custom categories

- 🖼️ **File Upload**
  - Upload profile picture to **Cloudinary**
  - Handled with `multer.memoryStorage()`

- 👨‍💼 **Admin Route (Bonus)**
  - Overview of total users
  - Top spending categories
  - Aggregated income/expenses

- 🔒 **Security**
  - JWT Authentication
  - Input validation using **Zod**
  - Rate limiting, Helmet, and CORS enabled
  - Global error handling and logging

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT + bcrypt
- **Validation:** Zod
- **File Upload:** Multer + Cloudinary
- **Security:** Helmet, CORS, Rate Limiting
- **Logging:** Morgan + Custom Logger

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/finance-tracker-api.git
   cd finance-tracker-api



Install dependencies

npm install


Configure environment variables

Create a .env file in the root:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/finance_tracker
JWT_SECRET=super_secret_key
JWT_EXPIRES=7d

CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx


Start the server

npm run dev

📡 API Endpoints
🔑 Auth

POST /auth/register → Register new user

POST /auth/login → Login and receive JWT

GET /auth/profile → Get logged-in user profile

💸 Transactions

POST /transactions → Add new transaction

GET /transactions → List all transactions

GET /transactions/monthly-summary?year=2025&month=5 → Monthly summary

PUT /transactions/:id → Update transaction

DELETE /transactions/:id → Delete transaction

🗂️ Categories

GET /categories → List all categories

🖼️ Upload

POST /upload/profile-picture → Upload user profile picture

👨‍💼 Admin

GET /admin/overview → Admin dashboard (users + spending summary)

👤 Users

GET /users/me → Current user info

PUT /users/me → Update user profile

DELETE /users/me → Delete own account

GET /users (admin only) → List all users

DELETE /users/:id (admin only) → Delete user by ID

🧪 Testing with Postman

Import the API collection (see postman_collection.json if included).

Set Environment variable:

base_url = http://localhost:5000

token = {{your JWT here}}

Example request:

POST {{base_url}}/auth/login
Content-Type: application/json

{
  "email": "ali@example.com",
  "password": "secret123"
}

📂 Project Structure
src/
  server.js
  app.js
  config/
  middlewares/
  models/
  controllers/
  routes/
  schemas/

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it for personal and commercial projects.

👨‍💻 Author

🙍‍♂️Abdiladiif Abdisamed
📧cabdiladiifcabdisamed@gmail.com