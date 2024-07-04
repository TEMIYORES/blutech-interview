import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";

// Initialize the QueryClient instance for react-query
const queryClient = new QueryClient();

/**
 * Main entry point of the application.
 *
 * This script renders the React application into the root element of the HTML.
 * It wraps the App component with React.StrictMode and QueryClientProvider for better
 * error handling and query management.
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
