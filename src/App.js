
//import css and hooks

import "./styles.css";
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Contex";

//import components and views

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

// utilizo hooks useState / useEffect

export default function App() {

const [fotos, setFotos] = useState([])
const sharedState = {fotos, setFotos}

useEffect(() => {
  getFotos()
    
}, [])

//const variable GetFotos hace get al json de fotos Pexels

const getFotos = async () => {

    const endpoint = "/fotos.json";
    const respuesta = await fetch(endpoint)
    const data = await respuesta.json()
    let photos = data.photos
    setFotos(photos)
}

// f return dibuja el html proveyendo Context, Browser Router wrap and routes

  return (
    <div className="App">
    <Context.Provider value={sharedState}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>

      </BrowserRouter>
    </Context.Provider>
    </div>
  );
}