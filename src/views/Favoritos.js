
// imports

import React from "react";
import "../assets/css/galeria.css";
import Context from "../Contex";
import { useContext } from "react";

// fx fav > uitlizo hook useContext

export default function Favoritos() {
  const { fotos} = useContext(Context)

  //renderizo html > fotos objtc con metodos filter y map !RECORDAR VOLVERA ESTUDIAR MÉTODOS DE ARRAY DE OBJETOS!

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-4 galeria grid-columns-4">
        {fotos
          .filter((foto) => foto.liked)
          .map((elemento, item) => (
            <div
              className="foto"
              style={{ backgroundImage: `url(${elemento.src.medium})` }}
              key={item}
              alt={elemento.alt}
            >
            </div>
          ))}
      </div>
    </div>
  );
}