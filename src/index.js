import { createRoot } from 'react-dom/client';

const container = document.getElementById("root");
const app = createRoot(container);

app.render(<h1>hello</h1>);
