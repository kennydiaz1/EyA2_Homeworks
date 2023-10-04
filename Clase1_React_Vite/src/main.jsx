import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GifExpertApp  from './componentApp'
import Giftgrid from './components/GifGrid'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GifExpertApp title = 'Gift App' />
    <Giftgrid title = 'Challenge - 12 ' />
  </React.StrictMode>,
)
