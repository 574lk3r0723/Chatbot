Financial Advisor Chatbot (chatbot-fintech)

A modern AI-powered financial advisor chatbot built with FastAPI (backend) and React + Tailwind CSS (frontend), using OpenAI’s GPT models to provide financial guidance, budgeting tips, and investment advice.

Features

Multi-turn conversation with memory

Financial advice on budgeting, investments, and personal finance

Async FastAPI backend calling OpenAI API

Responsive frontend built with React & Tailwind

Dark/light mode ready (customizable via Tailwind)

In-memory conversation storage (can be extended to database)

Project Structure
chatbot-fintech/
├── backend/
│   ├── app/
│   │   ├── main.py           # FastAPI entry point
│   │   ├── routes/
│   │   │   └── chat.py       # Chat endpoint
│   │   ├── services/
│   │   │   └── openai_service.py  # OpenAI API integration
│   │   ├── utils/
│   │   │   └── memory.py     # In-memory conversation storage
│   │   └── models/
│   │       └── conversation.py   # Pydantic message model
│   ├── requirements.txt
│   └── .env                  # OpenAI API key
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── services/         # API calls
│   │   ├── App.jsx
│   │   └── index.css         # Tailwind CSS
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md

Setup
Backend (FastAPI)

Navigate to backend folder:

cd chatbot-fintech\backend


Create and activate a virtual environment:

python -m venv venv
.\venv\Scripts\Activate.ps1


Upgrade pip and install dependencies:

python -m pip install --upgrade pip setuptools wheel
pip install -r requirements.txt


Create a .env file with your OpenAI API key:

OPENAI_API_KEY=your_openai_api_key_here


Run the backend server:

uvicorn app.main:app --reload


The API will be available at http://127.0.0.1:8000.

Frontend (React + Tailwind)

Navigate to frontend folder:

cd ..\frontend


Install dependencies:

npm install


Start the frontend server:

npm start


The app will run at http://localhost:3000.

Usage

Open your browser at http://localhost:3000.

Type a financial question in the input box (e.g., “How should I save for retirement?”).

The chatbot will respond with AI-generated financial advice.

API Endpoint

POST /chat/

Request Body:

{
  "message": "Your financial question here"
}


Response Body:

{
  "reply": "AI-generated financial advice"
}

Dependencies

Backend:

FastAPI

Uvicorn

Python-dotenv

OpenAI

Frontend:

React

Tailwind CSS

React Scripts

Notes

The chatbot currently uses in-memory conversation storage; you can extend it to a database for persistent sessions.

Recommended to use OpenAI GPT-4-turbo or GPT-4o-mini for financial advice.

For production deployment, configure proper CORS and environment variables.

Future Improvements

Persistent conversation history with database (SQLite, PostgreSQL)

User authentication

Enhanced financial calculations (e.g., savings projections, portfolio analysis)

Dark/light mode toggle

Responsive mobile UI enhancements
