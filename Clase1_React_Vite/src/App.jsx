import React from 'react'
import './App.css'
//import GifGrid from './components/GifGrid'
import { GifGrid } from './components/GifGrid'

const categories = ['Gifs de gatos', 'Gifs de perros', 'Gifs de monos']

function App() {
  return (
    <>
      <h1>Ejercicio</h1>
      <h2>Bienvenidos!</h2>
      <div className="App">
        {categories.map((category, key) => (
          <GifGrid key={key} title={category} />
        ))}
      </div>
    </>
  );
}

export default App
