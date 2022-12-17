import "./styles.css";
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Contex";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {

const [fotos, setFotos] = useState([])
const estadoCompartido = {fotos, setFotos}

useEffect(() => {
  consultarFotos()
    
}, [])

const consultarFotos = async () => {

    const endpoint = "/fotos.json";
    const respuesta = await fetch(endpoint)
    const data = await respuesta.json()
    let photos = data.photos
    setFotos(photos)
}

  return (
    <div className="App">
    <Context.Provider value={estadoCompartido}>
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