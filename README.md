# Challenge Application: Full-Stack Web App on AWS

The site is live on: https://d2pdyfcra4vp4j.cloudfront.net/

A robust, full-stack web application designed with a clean 3-tier architecture, demonstrating seamless integration between a modern frontend, a structured RESTful API, and a relational database, securely deployed on Amazon Web Services (AWS) via a unified CDN reverse proxy.

## 🏗️ Architecture Overview

The application is structured to ensure separation of concerns, high security, and maintainability.

### Local Development Architecture
* **Frontend**: The user interface is a React App, built to communicate with the backend server via HTTP requests.
* **Backend Core**: The backend server is structured into three distinct layers: Controller (handling routing and requests), Service (business logic), and Repository (data access).
* **Data Storage**: A local MySQL Database is connected to the Repository layer for persistent data storage.
* **API Testing**: Postman is actively utilized to send requests and receive responses back from the server during development.

### AWS Cloud Deployment Architecture (Production)
To eliminate CORS issues natively and mask backend infrastructure, the application leverages **AWS CloudFront** as a unified Reverse Proxy entry point:
* **Edge Routing & CDN**: **AWS CloudFront** secures the app with universal HTTPS and splits traffic based on path behaviors:
  * `/` (Static Assets) ➔ Routed directly to **Amazon S3**.
  * `/challenges*` (API Queries) ➔ Reverse-proxied to **Amazon EC2** on Port 8080.
* **Frontend Hosting**: The static React App is hosted and served from an **AWS S3** bucket configured for Static Website Hosting.
* **Compute & Backend**: The Java Spring Boot REST API is deployed on an **AWS EC2** instance.
* **Data Storage**: A **MySQL** relational database runs securely within the EC2 instance environment for persistent storage.

## 🛠️ Tech Stack

**Frontend:**
* React.js (Axios configured with secure relative pathing)

**Backend:**
* Java & Spring Boot (REST API)
* MVC Pattern (Controller, Service, Repository)

**Database:**
* MySQL Relational Database

**Cloud Infrastructure & DevOps:**
* Amazon CloudFront (Unified Reverse Proxy / SSL Delivery)
* Amazon S3 (Static Website Hosting)
* Amazon EC2 (Server Deployment & Database Hosting)
* Postman (API Testing)

## 🚀 Getting Started

### Prerequisites
* Node.js and npm (for frontend)
* Java Development Kit (JDK) 17+
* Maven (for backend dependencies)
* AWS Account (for cloud deployment)
