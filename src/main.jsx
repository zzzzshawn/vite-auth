import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <Navbar />
        <App />
        <Toaster />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
