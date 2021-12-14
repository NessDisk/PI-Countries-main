import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Countrys from "./countrys";
import axios from "axios";
export default function DetailCountry()
{
    const [country, setCountry] = useState(null)

    let {id} = useParams()

    console.log("testeo");
    useEffect(() => {
       
        axios.get("http://localhost:3001/api/country/"+id)
        .then((response)=>{
           
            setCountry(response.data)
            
        })
        return()=>{
          
            setCountry(null)
        }
      
    }, [])

    return <div>
{
    country?
    <>
    <h3> {country.name}</h3>
    <img src={country.imageflag} alt="image" />
    </>:
    <div>Cargando</div>
}

    </div>
}