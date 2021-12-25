import { useDispatch, useSelector } from "react-redux" 
import { useEffect} from "react"
import { ASCENDENTE ,DECENDENTE,CONTIENENTE, ACTIVIDAD} from "../constante/sort"
 import {Sort,getAllActivity, getCountryByActivity, getAllCountry} from "../store/actions/index"

 export default function OrderByActivity()
 {       
    const dispach =useDispatch()
//tabla de actividades
let activtyx  = useSelector((state) => state.activty)

function onSelectChange(e)
{
    e.preventDefault();
    // console.log(e.target.value);
    if(e.target.value === "nada")
    {
       dispach(getAllCountry()) //ejecuta la accion 
     
   }else{

       dispach(getCountryByActivity(e.target.value))
   }
}


useEffect(() => {      // se ejecuta al principio cuando se lanza el compenente
    
    
    dispach(getAllActivity()) //ejecuta la accion 
    
}, [])



console.log(activtyx)

    return<select name="select" onChange={onSelectChange}>
             
                  <option className="Activity" value={"nada"}  > nada</option>
         {
            activtyx.map((x)=>{

                return <option className="Activity" value={x.name} > {x.name}</option>
       
            })
        }

    </select>
    

}