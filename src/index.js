import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./css/global/global.css"
import "./css/style/style.css"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

