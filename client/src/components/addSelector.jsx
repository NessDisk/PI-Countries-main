import { useDispatch, useSelector } from "react-redux"
import { AddNewActivity, getAllCountry, getAllActivity } from "../store/actions"
import { useEffect, useState} from "react"


export default function  Addselector()
{
    let Countryx  = useSelector((state) => state.countris)

    let dispatch = useDispatch()

    useEffect(() => {      // se ejecuta al principio cuando se lanza el compenente
            
        dispatch(getAllCountry()) //ejecuta la accion       
       
        
    }, [])


    return <div>

           <select name="select" className="ciudades" >
               {
          Countryx.map((x)=>{
          return <option value={x.name} > {x.name}</option>
          })
          }
       
          </select>



    </div>
}