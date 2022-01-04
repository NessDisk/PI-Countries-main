import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import Countrys from "./countrys";
import axios from "axios";
import styles from "./detailCountry.module.css"

export default function DetailCountry()
{
    let ActivityAux  = useSelector((state) => state.activty)
    const [country, setCountry] = useState(null)
    const [activity, setActivity] = useState(null)
    let {id} = useParams()

    const dispach =useDispatch()
    
    useEffect(() => {
      

        axios.get("http://localhost:3001/api/country/"+id)
        .then((response)=>{

            setCountry(response.data)
            
        })
        axios.get("http://localhost:3001/api/activity/all")
        .then((Act)=>{
           
            setActivity(Act.data)
            
        })
        
        return()=>{
            setCountry(null)
            setActivity(null)
        }


      
      
    }, [])


//cuadriculas
    return <div className={styles.control}>
{
    country?
    <>
    <div>
        <div className={styles.cardCountryFirst}>
    <h3> {country.name +" - " + country.id}</h3>
    <img src={country.imageflag} alt="image" className={styles.flag}/>
    <h2  style={{
        textAlign: "center"     
    }}>   {"Continente: " + country.Continente} <br/> 
          {"Capital: "+country.capital} <br/>
           Subregion:{country.Subregion} <br/>
           Area:{country.Area} <br/>
           Población:{country.Poblation} <br/>
    </h2>
    </div>

    
    </div>
    {/* <h2>

{activity[0].name}
    </h2> */}
    </>:
    <div>Cargando</div>
}

{

activity?
<>

{
activity.map((x)=>{
  return x.countries.map((c)=>{

if(c.name === country.name)
{
    
    return <div className={styles.cardCountry}> <h2 style={{
        
    }}>   {"Nombre Act: " + x.name} <br/> 
          {"Dificulta: "+x.Dificulty} <br/>
          Duracion:{x.duracion} <br/>
          Temporada:{x.Temporada} <br/>
          </h2>
          </div>
        
        }
   })
   
return <></>

})
}


</>:
<div>Cargando</div>

}

    </div>
}