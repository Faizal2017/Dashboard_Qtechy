# 🌟 React Dashboard with Tailwind CSS & Cloudinary

A responsive, dynamic dashboard built using **React**, **Tailwind CSS**, **Cloudinary**, and **Node.js + MongoDB**. This project was developed as part of a **software engineering internship assignment** to demonstrate modern full-stack development skills.

---

## 📌 Features

✅ Built with **React + Vite**  
✅ Styled using **Tailwind CSS**  
✅ Real-time editing of:

- Header title and image
- Navigation links (text + URL)
- Footer contact info

✅ **Cloudinary** integration for image upload  
✅ Fully functional **Dashboard** UI  
✅ Backend with **Express + MongoDB**  
✅ Persistent data saving (MongoDB)  
✅ Navigation between pages using **React Router**  
✅ Toast notifications using **React Toastify**

---

## 🧩 Technologies Used

| Technology   | Description                    |
| ------------ | ------------------------------ |
| React        | Frontend library (Vite)        |
| Tailwind CSS | Utility-first CSS framework    |
| Cloudinary   | Image upload & hosting         |
| Node.js      | Backend runtime                |
| Express      | API server framework           |
| MongoDB      | NoSQL database for persistence |
| React Router | Frontend routing               |
| Toastify     | Toast notifications            |

---

## 📁 Folder Structure

```
intern-dashboard/
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/          # Header, Navbar, Footer, Dashboard, Pages
│   │   ├── context/             # Context API for global state
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/                     # Node.js + Express backend
│   ├── index.js
│   ├── .env
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Faizal2017/Dashboard_Qtechy.git
cd intern-dashboard
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## 🔧 Setup Instructions

### 🖼️ Cloudinary Setup

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Go to **Settings** → **Upload** → **Upload presets**
3. Create an **Unsigned preset** (e.g., `fez_upload`)
4. Use your **Cloud name** and **preset** in the frontend upload code

### 🌐 MongoDB Setup

1. Create a **MongoDB Atlas** cluster
2. Add a user & whitelist your IP address
3. Copy your MongoDB URI and paste it in `.env`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/intern-dashboard?retryWrites=true&w=majority
PORT=5000
```

---

## ▶️ Run the Application

### Frontend (React)

```bash
cd frontend
npm run dev
```

### Backend (Node.js)

```bash
cd backend
node index.js
```

### Access the Application

Open your browser and navigate to:
🔗 **http://localhost:5173**

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Faizal2017**

- GitHub: [@Faizal2017](https://github.com/Faizal2017)
- Repository: [Dashboard_Qtechy](https://github.com/Faizal2017/Dashboard_Qtechy)
