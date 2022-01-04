
import { Link } from "react-router-dom"
import React from 'react';
import { useEffect } from 'react';

import background from "../asset/mapamundi.jpg";
import styles from "./inicial.module.css";


// import styless from "./../asset/video.mp4";

export default function  Inicial()
{
   

    return <div>


        <div class={styles.content}>
  <h1 style={{
    color: "white",
  }}>Api de Paises</h1>
  <p>Esta es una api creada para mostrar paises del mundo.</p>
  <Link   to={`/p`}>
  <button type="submit" id={styles.myBtn} onclick="myFunction()">Entrar</button>
  </Link>
</div>







    </div>
}
