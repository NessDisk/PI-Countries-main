import { Link } from "react-router-dom"
import React from 'react';
import styles from "./country.module.css";

export default function  Country({id,name,continente, flag} )

{
 

    return <div className={styles.country}>
      <Link to={`/p/${id}`}>
      <div>
      <img src={flag} className={styles.flag}/>
      <h5>{name} / {continente}</h5>    
      </div>

      </Link>
          
    </div>
}