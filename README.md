# 🚀 ImageFlow API

## 📌 Description

Scalable image upload API using Node.js, MongoDB, and ImageKit.

---

## 🧩 Project Overview

ImageFlow API is a backend service that handles image uploads from a frontend application. It processes images, stores them in cloud storage, and saves metadata in a database for efficient retrieval.

---

## ⚙️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB, Mongoose
* **File Handling**: Multer
* **Cloud Storage**: ImageKit
* **Environment Management**: dotenv
* **API Testing**: Postman

---

## 🔄 Workflow

1. User selects an image from the frontend
2. Image is sent via `POST /upload`
3. Backend processes the file using Multer
4. Image is uploaded to ImageKit
5. Metadata is stored in MongoDB
6. Data is retrieved using `GET /data`

---

## 🔌 API Endpoints

### 1. Upload Image

**POST** `/upload`

* Accepts image file
* Uploads to ImageKit
* Stores metadata in MongoDB

---

### 2. Fetch Images

**GET** `/data`

* Returns all stored image data

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

PORT=3000
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url

---

## ▶️ Installation & Setup

```bash
npm install
node server.js
```

---

## 📁 Project Structure

```
project/
│── src/
│   ├── app.js
│   ├── db/
│   ├── routes/
│   ├── controllers/
│
│── server.js
│── .env (ignored)
│── .env.example
│── .gitignore
│── package.json
```

---

## 🔒 Security

* Sensitive data stored in `.env`
* `.env` excluded via `.gitignore`
* API keys and database credentials are not exposed

---

## 💡 Features

* Image upload via REST API
* Cloud-based image storage
* MongoDB integration
* Scalable backend design

---

## 📈 Future Improvements

* JWT Authentication
* Rate limiting
* Image compression
* Pagination & filtering

---

## 🧠 Learning Outcomes

* REST API design
* File upload handling
* Database integration
* Third-party service integration

---

## 📬 Contribution

Pull requests are welcome. For major changes, please open an issue first.

---

