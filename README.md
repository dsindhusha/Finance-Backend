# 💰 Finance Backend System

A production-style backend system for managing financial records with role-based access control and dashboard analytics.

---

## 🚀 Features

* 🔐 JWT Authentication (Login/Register)
* 👥 Role-Based Access Control (Admin, Analyst, Viewer)
* 💰 Financial Records Management (CRUD)
* 📊 Dashboard Analytics (Income, Expense, Categories)
* 🛡️ Input Validation using Zod
* ⚠️ Global Error Handling
* 📦 Clean Modular Architecture

---

## 🧠 System Design

This project follows a modular backend architecture:

```
src/
 ├── modules/
 │    ├── auth/
 │    ├── finance/
 │    ├── dashboard/
 │
 ├── common/
 │    ├── middleware/
 │
 ├── core/
 │    ├── database/
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* TypeScript
* PostgreSQL (Neon DB)
* Prisma ORM
* Zod (Validation)
* JWT (Authentication)

---

## 🔑 API Endpoints

### 🔐 Auth

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

---

### 💰 Records

* GET `/api/v1/records`
* POST `/api/v1/records`
* PUT `/api/v1/records/:id`
* DELETE `/api/v1/records/:id`

---

### 📊 Dashboard

* GET `/api/v1/dashboard/summary`
* GET `/api/v1/dashboard/categories`

---

## 🔐 Role Permissions

| Role    | Access                     |
| ------- | -------------------------- |
| Viewer  | Read-only access           |
| Analyst | View records + analytics   |
| Admin   | Full access (CRUD + users) |

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/your-username/finance-backend.git
cd finance-backend
npm install
```

Create `.env` file:

```
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_secret_key
```

Run server:

```bash
npm run dev
```

---

## 🌐 Deployment

Backend is deployed on Render:

👉 https://your-render-url

---

## 🧪 Testing

Use Postman to test APIs:

1. Register user
2. Login → get JWT token
3. Add token in headers
4. Test records and dashboard APIs

---

## 🧠 Key Highlights

* Clean separation of concerns (Controller → Service → DB)
* Secure API using JWT and RBAC
* Optimized queries using Prisma
* Scalable architecture design

---

## 👩‍💻 Author

Sindhu
BTech CSE (AIML)

---

## ⭐ Final Note

This project demonstrates backend engineering skills including API design, database modeling, access control, and system architecture.

---
