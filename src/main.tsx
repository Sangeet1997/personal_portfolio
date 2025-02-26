import { createRoot } from "react-dom/client";
import App from "./App";
import { Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Router hook={useHashLocation}>
    <App />
  </Router>
);
