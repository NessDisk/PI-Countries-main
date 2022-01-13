import { useDispatch } from "react-redux" 
import { ASCENDENTE ,
          DECENDENTE,
          CONTIENENTE,
          POBLACION,
           MENOR_POBLACION,
            ACTIVIDAD,
            AREA_ASENDENTE ,
AREA_DECENDENTE,
        
        } from "../constante/sort"
import {Sort,ORDER_POPULATION} from "../store/actions/index"

export default function Order()
{       
const dispach =useDispatch()
function onSelectChange(e)
{
    let value = e.target.value;

   if(value === ASCENDENTE ||value === DECENDENTE )
   {
       dispach(Sort(e.target.value));       
   }
   else if(value === POBLACION || value === MENOR_POBLACION)
   {
    dispach(ORDER_POPULATION(e.target.value)); 
   }
   else if(value === AREA_ASENDENTE)
   {
    dispach(ORDER_POPULATION(e.target.value)) 
   }

}


    return <select name="select" onChange={onSelectChange}>
        <option value={ASCENDENTE} > ASCENDENTE</option>
        <option value={DECENDENTE} > DECENDENTE</option>
        <option value={POBLACION} > POBLACION</option>
        <option value={MENOR_POBLACION} > MENOR POBLACION</option>
        <option value={AREA_ASENDENTE} > Area</option>
        <option value={AREA_DECENDENTE} > Area</option>
    </select>

}