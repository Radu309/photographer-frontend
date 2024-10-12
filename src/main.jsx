import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <Router basename="/photographer-frontend">
        <App/>
    </Router>
);