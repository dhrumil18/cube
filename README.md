# Customer Details Portal

A React and TypeScript single-page application that allows users to view a list of customers and their details. The application fetches customer data and displays a photo grid that updates every 10 seconds.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- Displays a list of customers with their name and title.
- Shows detailed customer information, including a 3x3 grid of photos.
- Photos in the grid update every 10 seconds.
- Highlighted customer card when selected.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Axios**: HTTP client for making API requests.
- **SCSS**: CSS preprocessor for styling.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd customer-portal
   ```

2. **Install Dependencies**

   Ensure you have Node.js installed. Then, install the necessary dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. **Start the Development Server**

   ```bash
   npm start
   ```

   This command will start the development server and open the application in your default web browser. The server will automatically reload if you make changes to the source files.

2. **Build for Production**

   To create a production build of the application, use:

   ```bash
   npm run build
   ```

   The build artifacts will be stored in the `build` directory.

## Usage

1. **View the Customer List**

   On the left side of the application, you will see a list of customers. Each customer is represented by a card displaying their name and title.

2. **Select a Customer**

   Click on a customer card to view detailed information about the selected customer on the right side. The detailed view includes the customer's name, title, address, and a 3x3 grid of photos.

3. **Photo Grid**

   The photo grid updates every 10 seconds with new images fetched from a public API.

## API Endpoints

1. **Customer Data**

   The customer data is fetched from a public API:
   GET https://jsonplaceholder.typicode.com/users

2. **Photos**

   The photos for the grid are fetched from a public API:
   GET https://jsonplaceholder.typicode.com/photos?_limit=9

## Folder Structure

```
src/
├── assets/
│   └── images/
├── components/
│   ├── CustomerList.tsx
│   ├── CustomerDetails.tsx
│   ├── Header.tsx
│   ├── Loader.tsx
│   ├── Error.tsx
├── types.ts
├── App.tsx
├── main.tsx
└── setupTests.ts
```

- **`src/components/`**: Contains React components for the application.
- **`src/types.ts`**: Defines TypeScript interfaces for the data models.
- **`src/App.tsx`**: Main application component that integrates other components.
- **`src/main.tsx`**: Entry point for the React application.
