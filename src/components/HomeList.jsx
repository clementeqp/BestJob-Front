import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import APIURL from "./utils/APIURL";
// ! Lista general

export default function Home() {
  const [ofertas, setOfertas] = useState([]);
  useEffect(() => recibirOfertas(), []);

  async function recibirOfertas() {
    const ofertasResponse = await fetch(APIURL + `ofertas`);
    const data = await ofertasResponse.json();
    setOfertas(data);
  }

  console.log(ofertas);

  return (
    <div className="container_general">
      {ofertas.map((oferta) => (
        <ul key={oferta.id} className="container_oferta">
          <li className="oferta_titulo">
            {" "}
            <h2>{oferta.titulo}</h2>{" "}
          </li>
          <div className="oferta_experiencia_container">
            <li className="oferta_experiencia">
              <h3>{oferta.empresa}</h3>
            </li>
          </div>

          <li className="show_more">
            <Link to={`/oferta/${oferta.id}`}>
              <button>Ver más</button>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
