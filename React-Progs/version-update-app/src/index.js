// eslint-disable-next-line no-unused-vars
import React, { version } from 'react';
// import ReactDOM from 'react-dom/client';------18-version
// 17-version
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const rootNode = (document.getElementById('root'));
ReactDOM.render(<App />, rootNode);

// 18--version-----------------------------
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
