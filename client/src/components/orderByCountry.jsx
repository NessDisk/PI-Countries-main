import { useDispatch } from "react-redux" 
import { none , 
         Antarctic_Ocean,
         Americas,
         Africa,
         Asia,
         Europe,
         Oceania,
         Polar} from "../constante/cotinents"



import {Order_Continente} from "../store/actions/index"

export default function OrderbyContinente()
{       
const dispach =useDispatch()
function onSelectChange(e)
{  
       dispach(Order_Continente(e.target.value));  

}


    return <select name="select" onChange={onSelectChange}>
        <option value={none} > none</option>
        <option value={Antarctic_Ocean} > Antarctic Ocean</option>
        <option value={Americas} > Americas</option>
        <option value={Africa} > Africa</option>
        <option value={Asia} > Asia</option>
        <option value={Europe} > Europe</option>
        <option value={Oceania} > Oceania</option>
        <option value={Polar} > Polar</option> 


    </select>

}