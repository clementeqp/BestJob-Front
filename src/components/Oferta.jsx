import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
import APIURL from "./utils/APIURL";

// ! Detalle oferta

export default function Oferta() {
  const [oferta, setOferta] = useState([]);
  const [tecnologia, setTecnologia] = useState([]);

  useEffect(() => recibirOferta(), []);

  const getParam = useParams();
  const ofertaParamId = getParam.id;

  const recibirOferta = async () => {
    const ofertaResponse = await fetch(
      APIURL + `ofertas/` + `${ofertaParamId}`
    );
    const tecnologiaResponse = await fetch(
      APIURL + `tecnologias/` + `${ofertaParamId}`
    );

    const data = await ofertaResponse.json();
    const dataTecnologia = await tecnologiaResponse.json();

    setOferta(data);
    setTecnologia(dataTecnologia);
  };

  return (
    <div className="container_general_oferta">
      <div to="/">
        <button className="back_btn" variant="secondary">
          <a href="/">
            <img src={arrow} alt="" />
            VOLVER
          </a>
        </button>
      </div>
      <div className="container_oferta_ind">
        {" "}
        <div className="header_oferta">
          <h1>
            {oferta.titulo} en {oferta.empresa}
          </h1>
        </div>
        <div className="cuerpo_oferta">
          <ul className="columna_izq_oferta">
            <li>
              <b>Experiencia:</b> {oferta.anyosExperiencia}
            </li>
            <li>
              <b>Salario:</b> {oferta.salario}
            </li>
            <li>
              <b>Remoto:</b> {oferta.remoto ? "Si" : "No"}
            </li>
            <li className="tecnologias">
              <b>Tecnologias:</b> {tecnologia.nombre}
            </li>
          </ul>
          <p className="columna_der_oferta">{oferta.detalle}</p>
        </div>
        <div className="button_container">
          <button className="contact_btn">CONTACTA</button>
        </div>
      </div>
    </div>
  );
}
