import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FirstApp_Challenge from './FirstApp_Challenge'
import FirstApp_props from './FirstApp_props'
import FirstApp_validation_props from './FirstApp_validation_props'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp_Challenge/> 
    <FirstApp_props title='First App Props'/>
    <FirstApp_validation_props title='First App validation props' sum={300}/>
  </React.StrictMode>,
)
