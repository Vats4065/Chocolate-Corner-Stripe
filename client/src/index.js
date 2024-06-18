import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51PRYHRLdUI6Jl6jN63VaLY10xionOYbfC9Ym8VPzGlZOIBUIdQU2E4GxHXLeCFoeAGM6yIgZe9kdxaAuXdZQe4s100Hk9PHv8g")


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Elements stripe={stripePromise} >
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Elements>
);


