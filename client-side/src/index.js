import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import makeMainRoutes from "./routes/index";
import ShareContent from './components/share-content';

ReactDOM.render(
  // <App />,
  <ShareContent/>,
  document.getElementById('root')
);

