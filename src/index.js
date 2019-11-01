import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './components/Calendar/Calendar';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
ReactDOM.render(<Calendar/>, root);

serviceWorker.unregister();