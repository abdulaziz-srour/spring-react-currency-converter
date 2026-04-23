# Fullstack Currency Converter

A modern, responsive web application built with a Java Spring Boot backend and a React frontend. It guides users through an intuitive wizard to convert EUR into 10 different global currencies, demonstrating clean REST-API communication and robust state management.

## Tech Stack
* **Backend:** Java Spring Boot
* **Frontend:** React, HTML/CSS
* **Tools:** Node.js, IntelliJ IDEA / VS Code, Git

## Key Features & Quality Assurance
* **Wizard UI:** Intuitive step-by-step user flow managed by React State (`useState`).
* **Conditional UI Elements:** The submission button remains disabled until valid numerical input is detected, preventing empty or faulty API calls.
* **Precise Math:** The Spring Boot backend securely handles the conversion logic and strictly rounds the final output to two decimal places.
* **CORS Configured:** Secure cross-origin resource sharing (`@CrossOrigin`) established between the React client and the Spring server.


## How to Run

**1. Start the Backend (Spring Boot)**
* Navigate to the `backend` directory and open it in your Java IDE.
* Run the `CurrencyconverterApplication.java` file. 
* The server will run on `http://localhost:8080`.

**2. Start the Frontend (React)**
* Open a terminal in the `frontend` directory.
* Run the following command to install dependencies:
  ```bash
  npm install

* Start the development server:
    ```bash
    npm run dev

* Open the provided localhost link (`http://localhost:5173`) in your browser.