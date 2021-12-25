import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getAllCountry } from "../store/actions"
import Country from "../components/country"

export default function  Countrys()
{
    let Countryx  = useSelector((state) => state.countris)

    const [auxNumAction, setActionNum] = useState(10);
    //let auxNum = 12;
   
  async function ActionOnSumbite(e)  
    {
        e.preventDefault();
if(e.target.value === ">>")
{
    setActionNum(auxNumAction+10);
}else{
    
    setActionNum(auxNumAction-10);
}
console.log(auxNumAction)

        
    }
    let dispatch = useDispatch()
    useEffect(() => {      // se ejecuta al principio cuando se lanza el compenente
       
        dispatch(getAllCountry()) //ejecuta la accion       
        
    }, [])

        let x= 0
        let limiteCiclos = 0;

   

    return <div>        
     {/* {   <button type="submit" value="<<" onSubmit={ActionOnSumbite} />
        <button type="submit" value=">>" onSubmit={ActionOnSumbite} />} */}
        
        <form >
      <input type="submit" onClick={ActionOnSumbite} value="<<"/>
      <input type="submit" onClick={ActionOnSumbite} value=">>"/>
    </form>
       {
           Countryx.slice(auxNumAction-10, auxNumAction).map(
               (country)=>{
                         
                return  <Country key={x++}  id={country.id} name={country.name}   flag={country.imageflag} />
               }
           )

        }
           
           

    </div>
}