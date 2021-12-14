import { useDispatch } from "react-redux" 
import { ASCENDENTE ,DECENDENTE} from "../constante/sort"
import {Sort} from "../store/actions/index"

export default function Order()
{       
const dispach =useDispatch()
function onSelectChange(e)
{
   
    dispach(Sort(e.target.value));
}


    return <select name="select" onChange={onSelectChange}>
        <option value={ASCENDENTE} > ASCENDENTE</option>
        <option value={DECENDENTE} > DECENDENTE</option>
       
    </select>

}