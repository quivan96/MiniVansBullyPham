import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const app = createRoot(container);

app.render(<App />);
