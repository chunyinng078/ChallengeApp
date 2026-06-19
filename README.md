# Challenge Application: Full-Stack Web App on AWS

A robust, full-stack web application designed with a clean 3-tier architecture, demonstrating seamless integration between a modern frontend, a structured RESTful API, and a relational database, fully deployed on Amazon Web Services (AWS).

## 🏗️ Architecture Overview

The application is structured to ensure separation of concerns, scalability, and maintainability.

### Local Development Architecture
* **Frontend**: The user interface is a React App, built to communicate with the backend server via HTTP requests.
* **Backend Core**: The backend server is structured into three distinct layers: Controller (handling routing and requests), Service (business logic), and Repository (data access).
* **Data Storage**: A Database is connected to the Repository layer for persistent data storage.
* **API Testing**: Postman is actively utilized to send requests and receive responses back from the server during development.

### AWS Cloud Deployment Architecture
To ensure high availability and scalability, the application is deployed to AWS using the following services:
* **Frontend Hosting**: The static React App is hosted and served from an AWS S3 bucket.
* **Compute / Backend**: The backend server is hosted on an AWS EC2 (Elastic Compute Cloud) instance.
* **Managed Database**: The database infrastructure is migrated to AWS RDS (Relational Database Service) for secure and managed data storage.

## 💻 Tech Stack

**Frontend:**
* React.js

**Backend:**
* Java & Spring Boot (REST API)
* MVC Pattern (Controller, Service, Repository)

**Database:**
* SQL Relational Database

**Cloud Infrastructure & DevOps:**
* Amazon S3 (Static Website Hosting)
* Amazon EC2 (Server Deployment)
* Amazon RDS (Database Hosting)
* Postman (API Testing)

## 🚀 Getting Started

### Prerequisites
* Node.js and npm (for frontend)
* Java Development Kit (JDK) 17+
* Maven (for backend dependencies)
* AWS Account (for cloud deployment)

### Local Setup
1. **Clone the repository:**
```bash
   git clone [https://github.com/yourusername/challenge-app.git](https://github.com/yourusername/challenge-app.git)
