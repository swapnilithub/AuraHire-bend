import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';



import './styles2/createjob.css';
import './styles/Alljobs.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
