import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GifGrid from './components/GifGrid'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GifGrid title="Gifs de gatos" />
  </React.StrictMode>,
)
