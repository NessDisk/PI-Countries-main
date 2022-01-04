import { useDispatch, useSelector } from "react-redux"
import { AddNewActivity, getAllCountry, getAllActivity } from "../store/actions"
import { useEffect, useState} from "react"
import styles from "./addActivity.module.css"

import CardAdd from "./addCard"

import Addselector from "./addSelector"

export default  function  AddActivity()
{
    let Countryx  = useSelector((state) => state.countris)
    let Activty  = useSelector((state) => state.activty)

   
    
    const [name, setNombre] = useState(``)
    const [Dificulty, setDificulty] = useState(``)
    const [duracion, setDuration] = useState(``)
    const [Temporada, setSeason] = useState(``)
    
    
    let dispatch = useDispatch()
    
    async function  submitAction(e) {
        
        e.preventDefault();
        let NombreAux  =  document.getElementsByClassName("Nombre")
        let DificultadAux  =  document.getElementsByClassName("Dificultad")
        let DuracionAux = document.getElementsByClassName("Duracion")
        let TemporadaAux = document.getElementsByClassName("Temporada")
        // setDificulty(DificultadAux.value)
        // setDuration(DuracionAux.value)
        
        // setSeason(TemporadaAux.value)
        
        
        //    console.log(DificultadAux.value)
        //    { Dificultad
        //     Duracion
        //     Temporada}
        // ciudades  activas
        
        
        
        let ciudades = []
        ciudades  =  document.getElementsByClassName("ciudades")
        
        
        let  AuxResult ={}
        
        for(let i = 0 ; i < ciudades.length; i++)
        {
            AuxResult[ciudades[i].value] = ciudades[i].value
            
        }
        
        // for (index = ciudades.length - 1; index >= 0; index--) {
        //     ciudades[index].parentNode.removeChild(ciudades[index]);
        // }

        
        // console.log(AuxResult);
        
        // //crea la nueva actividad  post
        // await dispatch(AddNewActivity(
        //     {
        //         actividad:{name ,Dificulty,duracion,Temporada},
        //         AuxResult
        //     }
        //     ))

            for (let index = 0; index < DificultadAux.length; index++) {
             console.log("contador")
let name = NombreAux[index].value;
let Dificulty = DificultadAux[index].value;
let duracion = DuracionAux[index].value;
let Temporada = TemporadaAux[index].value;
setNombre(name)
setDificulty(Dificulty)
setDuration(duracion)
setSeason(Temporada)
                // await dispatch(AddNewActivity(
                //     {
                //         actividad:{name ,Dificulty,duracion,Temporada },
                //         AuxResult
                //     }
                //     ))  
                    await dispatch(AddNewActivity(
                        {
                            actividad:{
                                name,
                                Dificulty,
                                duracion,
                                Temporada
                                     },
                            AuxResult
                        }
                        ))  


            }
            window.location.href="/add"
            window.alert("La actividad se posteo correctamente");

        }
        
        
        
        
        function handleSubmit(e) {
            e.preventDefault();
            
            var sel = document.createElement("select");
            sel.className = "ciudades";
            sel.name= "select";
            for (let index = 0; index < Countryx.length; index++) {
                const element = Countryx[index];
                var opt1 = document.createElement("option");
                
                opt1.value = Countryx[index].name;
                opt1.text =  Countryx[index].name;
                sel.add(opt1, null)
                document.body.appendChild(sel);
                
            }
            
        }
        
        useEffect(() => {      // se ejecuta al principio cuando se lanza el compenente
            
            dispatch(getAllCountry()) //ejecuta la accion       
            dispatch(getAllActivity())
            
        }, [])
        
        let index = 0;
        
        
        
        function OnchenageActivity(e) {
            e.preventDefault();
            setNombre(e.target.value)
        }
        function OnchenageDificulty(e) {
            e.preventDefault();
            setDificulty(e.target.value)
        }
        function OnchenageDuration(e) {
            e.preventDefault();
            setDuration(e.target.value)
        }
        function OnchenageTemporada(e) {
            e.preventDefault();  
            setSeason(e.target.value)
        }
        
        
        const [Count, setCount] = useState(1)
    
        let arrayAux = [] 
        
        for (let index = 0; index < Count; index++) {
          
            
            arrayAux.push(<CardAdd/>); 
            
        }
        
function UpCount(e)
{

    e.preventDefault();
    console.log("test funcion")
    setCount(Count+1)
}

// selector funtions
const [CountSelector, setCountSelector] = useState(1)

let arraySelctorAux = [] 
        
for (let index = 0; index < CountSelector; index++) {
  
    
    arraySelctorAux.push(<Addselector/>); 
    
}

        
function UpCountSelector(e)
{

    e.preventDefault();
   
    setCountSelector(CountSelector+1)
}



        return <div >
       
      <h1>Añade una actividad</h1>
<div className={styles.control}>  
        {
                arrayAux.map((x)=>{
return  x
                })

        }
        <form  onSubmit={UpCount}>
        <input type="submit"  value="Add Actividad" id="UpCount"/>
        </form>
<div >
      
</div>

</div>

{/* selector  */}

{
                arraySelctorAux.map((x)=>{
return <li>{x} </li>
                })

        }
        <li>
  <form  onSubmit={UpCountSelector}>
        <input type="submit"  value="Add_Country" id="UpCountSelector"/>
        </form>
        </li>

<div>

</div>

<form onSubmit={submitAction}>
      <button type="submit">Post Actividad</button>
    </form>
    </div>
   }