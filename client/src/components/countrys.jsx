import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import { getAllCountry } from "../store/actions"
import Country from "../components/country"

export default function  Countrys()
{
    let Countryx  = useSelector((state) => state.countris)
    let dispatch = useDispatch()
    useEffect(() => {      // se ejecuta al principio cuando se lanza el compenente
       
        dispatch(getAllCountry()) //ejecuta la accion       
        
    }, [])
    
    console.log(Countryx)



  
        let x= 0

    return <div>        
       {
              
           Countryx.map(
               (country)=>{
                  
                return  <Country key={x++}  id={country.id} name={country.name}   flag={country.imageflag} />
               }
           )
       }
    </div>
}