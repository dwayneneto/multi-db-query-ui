# 🌐 Multi-DB Query UI

A modern full-stack application that allows users to interact with **MySQL**, **PostgreSQL**, and **MongoDB** databases using both **natural language prompts** and **manual queries**.

Built with:
- ⚙️ **FastAPI** (Python) backend
- 🖼️ **React.js** frontend (with Axios and Material UI)
- 🧠 **OpenAI GPT-3.5 Turbo** for natural language-to-SQL/Mongo translation

---

## 🚀 Features

- 🔍 Query MySQL, PostgreSQL, or MongoDB using **natural language**
- ⌨️ Manually enter SQL or MongoDB queries
- 📊 Beautifully rendered table results
- 📁 Support for optional schema context in prompts
- 🔒 Only SELECT queries allowed for safety

---

## 🖥️ Tech Stack

| Frontend     | Backend     | AI Layer    | Databases         |
|--------------|-------------|-------------|-------------------|
| React + Axios | FastAPI     | OpenAI GPT-3.5 | MySQL, PostgreSQL, MongoDB |

---

## 📦 Installation

### 1. Clone the Repo

```bash
git clone https://github.com/dwayneneto/multi-db-query-ui.git
cd multi-db-query-ui
2. Backend Setup
bash
Copy
Edit
cd backend
pip install -r requirements.txt
Create a .env file inside /backend/ and add:

env
Copy
Edit
OPENAI_API_KEY=your_openai_key_here
MONGODB_URI=your_mongo_uri_here
MONGODB_DATABASE=your_database_name
Start the backend:

bash
Copy
Edit
uvicorn main:app --reload
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm start
The app will run at http://localhost:3000.

🧠 How It Works
Prompt-to-SQL/Mongo: GPT-3.5 translates your prompt + optional schema into a valid query.

Backend routes the query to the correct database engine.

Frontend displays the results in a clean, table format.

📋 Sample Prompts
MySQL/PostgreSQL: Show all users over 30 years old

MongoDB: List all students with GPA > 3.5

📁 Folder Structure
css
Copy
Edit
multi-db-query-ui/
├── backend/
│   ├── main.py
│   ├── db.py, db_postgres.py, db_mongo.py
│   ├── openai_client.py
│   └── .env
├── frontend/
│   ├── src/
│   │   └── App.js
│   ├── public/
│   └── package.json
└── README.md
✅ To Do
 Manual and Natural Language query support

 MongoDB object formatting

 Authentication (optional)

 Export results to CSV/JSON
