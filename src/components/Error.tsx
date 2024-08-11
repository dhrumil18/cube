import React from "react";
import ErrorIcon from "../assets/images/error.png";

// Define the type for the props
interface ErrorProps {
  onRetry: () => void; // Define onRetry as a function that takes no arguments and returns void
}

const Error: React.FC<ErrorProps> = ({ onRetry }) => {
  return (
    <div className="error">
      <img src={ErrorIcon} alt="error" />
      <span>Failed to load products</span>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default Error;
