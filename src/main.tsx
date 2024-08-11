import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/global.scss";

// Ensure the root element exists and is of type HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
