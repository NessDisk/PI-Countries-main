import { useDispatch } from "react-redux" 
import { ASCENDENTE ,DECENDENTE,CONTIENENTE,POBLACION, MENOR_POBLACION, ACTIVIDAD} from "../constante/sort"
import {Sort,Order_Population} from "../store/actions/index"

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
    dispach(Order_Population(e.target.value)); 
   }

}


    return <select name="select" onChange={onSelectChange}>
        <option value={ASCENDENTE} > ASCENDENTE</option>
        <option value={DECENDENTE} > DECENDENTE</option>
        <option value={POBLACION} > POBLACION</option>
        <option value={MENOR_POBLACION} > MENOR POBLACION</option>
    </select>

}