import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import rootReducer from './reducer';
const store = configureStore({
  reducer:rootReducer,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store ={store} >
  <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </Provider>

  
)
