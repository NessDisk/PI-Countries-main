import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getAllCountry } from "../store/actions"
import Country from "../components/country"
import styles from "./countrys.module.css";

import background from "./image.jpg";
import stylesIni from "./inicial.module.css";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";


export default function  Countrys()
{
    let Countryx  = useSelector((state) => state.countris)
    let pos = 0;
    const [auxNumAction, setActionNum] = useState(9);
    const [ReducerCount, setCount] = useState(9);
    const [Count, setCountAux] = useState(0);

  async function ActionOnSumbite(e)  
    {
        e.preventDefault();

console.log(e.target)


if(e.target.value === ">>"&& (auxNumAction+10) < 260  )
{  
    if(Count+1 >0)
    {
        setCount(10);
    }

    setCountAux(Count+1);

  

    setActionNum(auxNumAction+10);
}else if(e.target.value === "<<" && (auxNumAction-10) > 0 ){
  
    if((Count-1) === 0 )
    {
        setCount(9);
    }

    setCountAux(Count-1);
    setActionNum(auxNumAction-10);
}

        
    }
    let dispatch = useDispatch()
    useEffect(() => {      // se ejecuta al principio cuando se lanza el compenente
       
        dispatch(getAllCountry()) //ejecuta la accion       
        
      
        let ciudades = []
        ciudades  =  document.getElementsByClassName("ciudades")
 
        for ( let i = ciudades.length - 1; i >= 0; i--) {
     ciudades[i].parentNode.removeChild(ciudades[i]);
 }
    

    }, [])

        let x= 0
        let limiteCiclos = 0;


    return <div>        
   
      {
      Countryx.length > 0?
            <>
    <div  className={styles.countrys}  >
      { 
            
                Countryx.slice(auxNumAction -ReducerCount, auxNumAction).map(
                
                  (country)=>{
                        
                      
                        return  <Country  key={x++}  id={country.id}  name={country.name} continente={country.Continente}  flag={country.imageflag} />
                      }
                      )
                
                  }

            

    </div>  

    </>:
                 <div>No existe pais con ese ambito</div>
                 }
 
   <ul>
   <li>  <form type="submit" onClick={ActionOnSumbite} >
        <input type="submit"  value="<<"  className={styles.button} style={{
            color: "white",
            fontSize: "32px",    
        }} />     
      </form> </li>
      {/* <button type="submit" onClick={ActionOnSumbite}  value=">>"  className={styles.button2}> */}
        {/* <HiChevronDoubleRight value=">>" style={{
            color: "white"
        }}/> */}
      {/* </button> */}
     

       <li>
        <form type="submit" onClick={ActionOnSumbite} >
        <input type="submit"  value=">>"  className={styles.button2} style={{
            color: "white",
            fontSize: "32px",  
            fontWeight: "200"
            // transform: 'scale(1, 1)'
        }} />     
      </form>
      </li>
     
   <li><h4 style={{
            
            color: "white",
            position: "relative",
 left: "660px",
            }} > {auxNumAction+"/250"}</h4> </li>
   </ul>
    </div>
}