
// imports

import React from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Contex";
import { useContext } from "react";

// utilizo useContext para e global y creo const addFav 

export default function Galeria() {

  const { fotos, setFotos} = useContext(Context)

  const addFav = (id) => {
    
    const seleccionado = fotos.findIndex((foto) => foto.id === id)
    fotos[seleccionado].liked = "true"
    setFotos([...fotos])
  }

  //renderizo o dibujo galería en html con método map !RECORDAR REPASAR MAP!
  //Además > onclick propiedad a las fotos para favoritearlas

  return (
    <div className="galeria grid-columns-4 p-4">
      {fotos.map((foto, item) => (
        <div
          onClick={() => addFav(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src.medium})` }}
          key={item}
        >
          <Heart filled={foto.liked} />
          <p> {foto.alt} </p>
        </div>
      ))}
    </div>
    
    );
  }