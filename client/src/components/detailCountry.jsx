import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import Countrys from "./countrys";
import axios from "axios";

export default function DetailCountry()
{
    let ActivityAux  = useSelector((state) => state.activty)
    const [country, setCountry] = useState(null)
    const [activity, setActivity] = useState(null)
    let {id} = useParams()

    const dispach =useDispatch()
    
    useEffect(() => {
      
        // ActivityAux.forEach(element => {
        //     console.log(ActivityAux)
        // });

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

        // encuentra actividad turistica
      
      
    }, [])

async  function  Random()
{
//   const auxArray
    // axios.get("http://localhost:3001/api/activity/all")
    // .then((response)=>{
       
    //    // setCountry(response.data)
    //     console.log(response)
    //     auxArray = response;



    // })
    // return()=>{
          
    //     console.log("no hay data")
    // }
// console.log(activity)

    // recorremos todas las actividades.
// for (let index = 0; index < auxArray.data.length; index++) {
//     const actividadAux = auxArray.data[index];
//     //recorremos todos los paises de esas actividades
//     for (let e = 0; e < actividadAux.countries.length; e++) {
//         const countryAux = actividadAux.countries[e];
        
//         // Encontramos si el pais detallado se encuentra 
    
//     //     if(country.name === countryAux.name)
//     //   {
//           console.log("testo")
//     // return <h2>
//     // txt
//     // </h2>
//     //   }
    
    
//     }
//     }



}

    return <div>
{
    country?
    <>
    <h3> {country.name +" - " + country.id}</h3>
    <img src={country.imageflag} alt="image" />
    <h2  style={{
        textAlign: "center"     
    }}>   {"Continente: " + country.Continente} <br/> 
          {"Capital: "+country.capital} <br/>
           Subregion:{country.Subregion} <br/>
           Area:{country.Area} <br/>
           Población:{country.Poblation} <br/>
    </h2>
    
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
    console.log(c.name === country.name);
    return <h2 style={{
        
    }}>   {"Nombre Act: " + x.name} <br/> 
          {"Dificulta: "+x.Dificulty} <br/>
          Duracion:{x.duracion} <br/>
          Temporada:{x.Temporada} <br/>
          </h2>}
   })
   
return <></>

})
}


</>:
<div>Cargando</div>

}

    </div>
}