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


