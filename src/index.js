import { createRoot } from "react-dom/client";

import App from "./App";

// React Bootstrap Configuration
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

const root = createRoot(document.getElementById("root"));
root.render(<App />)