import React from 'react';

import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/index.css';
import Login from './components/Login';

// function App() {
//   return (
//     <div class='container mx-auto px-4 sm:px-6 lg:px-8'>
//       <h1>hello</h1>
//     </div>
//   );
// }

render(<App />, document.getElementById('root'));
