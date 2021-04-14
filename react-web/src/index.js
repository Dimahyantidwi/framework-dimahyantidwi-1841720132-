import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogPost from './container/BlogPost/BlogPost';
import * as serviceWorker from 'register-service-worker'

ReactDOM.render(<BlogPost/>, document.getElementById('content'));
serviceWorker.unregister();