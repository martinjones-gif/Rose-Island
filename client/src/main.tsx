import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Force cache invalidation: v1.0.2
console.log("Rose Island Story v1.0.2 loaded");
createRoot(document.getElementById("root")!).render(<App />);
