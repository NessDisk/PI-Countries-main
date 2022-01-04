import { useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import axios  from "axios"
import {searchCountry} from "../store/actions/index"
import Country from './country'
export default function SearchBar()
{
    let filerteredCountrisx  = useSelector((state) => state.countris)

    const [search, setSearch] = useState(``)

     let dispatch = useDispatch()
    function onSumbite(e)
    {
        e.preventDefault();
     
        dispatch( searchCountry(search))
       


        console.log(filerteredCountrisx);
    }
    function onInputchange(e)
    {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return <div>
        <form onSubmit={onSumbite}>
<input type="text"  onChange={onInputchange} value={search}/>
<input type="submit" value="Buscar" />
        </form>

    </div>
}