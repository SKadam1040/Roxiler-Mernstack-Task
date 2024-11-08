Roxiler System Assignment
This project is a full-stack application developed as a part of the Roxiler System assignment. It provides API endpoints to manage and analyze product transaction data, as well as a frontend interface for viewing transaction statistics. The backend is built with Express and MongoDB, and the frontend uses Vite and React.

Table of Contents
Project Structure
Features
Technologies Used
Setup Instructions
API Endpoints
Frontend Usage
Project Structure
bash
Copy code
Roxiler-System-Assignment
├── server/               # Backend files
│   ├── Config/           # Database configuration
│   ├── Controllers/      # API controllers
│   ├── Models/           # Mongoose models
│   ├── Routes/           # API routes
│   ├── server.js         # Main server file
├── client/               # Frontend files
│   ├── src/              # Source code for frontend
│   ├── vite.config.js    # Vite configuration
├── .env                  # Environment variables
├── README.md             # Documentation
Features
Database Initialization: Fetches product transaction data and populates the MongoDB database.
Product Transaction Management: Get, filter, and search product transactions.
Monthly Analysis: Displays monthly statistics for sales, items sold, and unsold items.
Graphical Representations: Provides data visualization using bar and pie charts.
Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose
Frontend: Vite, React, Axios
Additional: Postman for API testing, MongoDB Compass for database management
Setup Instructions
Prerequisites
Node.js and npm installed.
MongoDB installed and running (or a connection to a MongoDB Atlas instance).
Environment Variables
Create a .env file in the server folder with the following keys:

env
Copy code
MONGODB_URL=mongodb://localhost:27017/Roxiler-Assignment
PORT=5000
In the client folder, create a .env file with the following key:

env
Copy code
VITE_BACKEND_URL=http://localhost:5000
Backend Setup
Go to the server folder.
Run:
bash
Copy code
npm install
npm start
The server will start at http://localhost:5000.
Frontend Setup
Go to the client folder.
Run:
bash
Copy code
npm install
npm run dev
The frontend will start at http://localhost:5173.
API Endpoints
1. Database Initialization
URL: GET /initialize_database
Description: Populates the database with product transaction data.
Response: { success: true, message: "Database initialization successful" }
2. Get All Transactions
URL: GET /product_transactions
Description: Fetches all product transactions.
Response: Array of transaction objects.
3. Get Sales by Month
URL: GET /sales_by_month?month={monthNumber}
Description: Fetches all sales for a given month.
Response: Array of sales objects for that month.
4. Search Transaction
URL: GET /search_transaction?searchQuery={query}
Description: Searches transactions by title, description, or price.
Response: Array of matching transaction objects.
5. Get Monthly Statistics
URL: GET /getStatistics?month={monthNumber}
Description: Returns total sales, sold items, and unsold items for a given month.
6. Get Bar Chart Data
URL: GET /getBarchart?month={monthNumber}
Description: Returns price range distribution for sales in a given month.
7. Get Pie Chart Data
URL: GET /getPiechart?month={monthNumber}
Description: Returns category distribution for sales in a given month.
Frontend Usage
After setting up and running both the backend and frontend servers:

Open http://localhost:5173 in your browser.
Use the interface to view data visualizations, search transactions, and get monthly analysis