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

   

    return <div  >        
     {/* {   <button type="submit" value="<<" onSubmit={ActionOnSumbite} />
        <button type="submit" value=">>" onSubmit={ActionOnSumbite} />} */}
        
        {/* <div style={{ backgroundImage: `url(${background } )` ,
   backgroundPosition: 'center',
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   width: '100vw',
   height: '100vh'
}}/> */}

{/* <div style={styles.fondo}/> */}
      {
      Countryx.length > 0?
            <>
    <div  className={styles.countrys} /*className="photo-container" */ >
      { 
            
          Countryx.slice(auxNumAction-10, auxNumAction).map(
          
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
            {/* <input type="submit" onClick={ActionOnSumbite}   value="<<"><HiChevronDoubleLeft /> </input>    
            <input type="submit" onClick={ActionOnSumbite} value=">>"><HiChevronDoubleRight /></input>    */}
        <button type="submit" onClick={ActionOnSumbite} value="<<" className={styles.button} >
        <HiChevronDoubleLeft style={{
            color: "white"
        }} />
      </button>
      <button type="submit" onClick={ActionOnSumbite} value=">>"  className={styles.button2}>
        <HiChevronDoubleRight  style={{
            color: "white"
        }}/>
      </button>
   </ul>
    </div>
}