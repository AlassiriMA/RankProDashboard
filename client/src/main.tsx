import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./hooks/use-theme";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="rankpro-theme">
    <App />
  </ThemeProvider>
);
