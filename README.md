# MyMiniBank Application. 

A full-stack mini banking application built with React, Vite, Tailwind CSS, and a .NET Web API. 

## Features

- **Frontend:** React with Vite for a fast development experience, styled with Tailwind CSS for modern UI design.
- **Backend:** .NET REST Web API. 
- **Routing:** Client-side routing with React Router.
- **State Management:** Managed through React's built-in hooks.
- **API Integration:** Fetches data from the .NET Web API.
- **Responsive Design:** Built with mobile-first design principles utilizing TailwindCSS.

### Video Overview

Google Drive - https://drive.google.com/file/d/1vq_Dx6TN0g60d3JQNxF5kNaQEqmyGnqE/view?usp=sharing

### Application Screenshots

![page1](https://github.com/nkouki98/MinibankApplication/blob/master/page1.png)
![userinput](https://github.com/nkouki98/MinibankApplication/blob/master/userdetails.png)
![accdetails](https://github.com/nkouki98/MinibankApplication/blob/master/accdetails.png)

### Technologies Used

1. Frontend

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) 
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) 
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
  
2. Backend

- ![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white) 
- ![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white) 


## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nkouki98/MinibankApplication.git
   cd your-repo-name
   ``` 

2. **Install Frontend Dependencies**
   ```bash
   cd reactfrontend/my-mini-bank-frontend
   npm install
   ```
3. **Install Backend Dependencies**
   ```bash
   cd webapi
   dotnet restore
   ```
4. **Run Server/Backend**
   ```bash
   cd webapi
   dotnet run/dotnet watch run
   Server should run @http://localhost:5197
   ```
5. **Run Frontend**
   ```bash
   cd reactfrontend
   npm run dev
   React should run @http://localhost:5173/


### Project Structure Overview
```bash
reactfrontend/my-mini-bank-frontend
└── src
    ├── Hooks              
    ├── api               
    ├── pages              
    └── components        
└── public                 
└── vite.config.js         
webapi
├── Controllers            # API controllers
├── data                   # Database context and configurations
├── models                 # Data models
├── repositories           # Data access logic (Empty for now)
├── services               # Business logic
├── utils                  # Utility functions and helpers
└── Program.cs             # Main entry point
```

### API Documentation 
1.http://localhost:5197/swagger for API details and Swagger UI API 
2. All Endpoints:
```bash
GET /api/Account/{id}
POST /api/Account/Create
POST /api/Account/{id}/deposit
POST /api/Account/{id}/withdraw
```




  
   
   
