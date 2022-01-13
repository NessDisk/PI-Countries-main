import { useDispatch, useSelector } from "react-redux"
import { AddNewActivity, getAllCountry, getAllActivity } from "../store/actions"
import { useEffect, useState} from "react"
import Styles from "./addCard.module.css"

export default  function  AddActivity()
{

    let Countryx  = useSelector((state) => state.countris)
    let Activty  = useSelector((state) => state.activty)

    const [name, setNombre] = useState(``)
    const [Dificulty, setDificulty] = useState(``)
    const [duracion, setDuration] = useState(``)
    const [Temporada, setSeason] = useState(``)

    let dispatch = useDispatch();

    async function  submitAction(e) {
e.preventDefault();


let DificultadAux  =  document.getElementById("Dificultad")
let DuracionAux = document.getElementById("Duracion")
let TemporadaAux = document.getElementById("Temporada")
setDificulty(DificultadAux.value)
setDuration(DuracionAux.value)

setSeason(TemporadaAux.value)
  





 let ciudades = []
   ciudades  =  document.getElementsByClassName("ciudades")

 
 let  AuxResult ={}

for(let i = 0 ; i < ciudades.length; i++)
{
        AuxResult[ciudades[i].value] = ciudades[i].value

}

for (let index = ciudades.length - 1; index >= 0; index--) {
ciudades[index].parentNode.removeChild(ciudades[index]);
}


  //crea la nueva actividad  post
  await dispatch(AddNewActivity(
    {
        actividad:{name ,Dificulty,duracion,Temporada},
        AuxResult
    }
 ))


    }


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

    



    return <div  className={Styles.CardAct}>

<form onSubmit={submitAction}>
     
           <br/>     
           <label htmlFor="" >Nombre</label>
           <input type="text" className="Nombre" onChange={OnchenageActivity} value={name}/>
           <br/>          
           <br/>
           <label htmlFor="">Dificultad</label>
           <select name="select" id="Dificultad" className="Dificultad" onChange={OnchenageDificulty} value={Dificulty}>
           <option value={"1"} > 1</option>
           <option value={"2"} > 2</option>
           <option value={"3"} > 3</option>
           <option value={"4"} > 4</option>         
           <option value={"5"} > 5</option>
          </select>
          <br/>
           <br/> 
           
           <label htmlFor="">Duracion</label>
           <select name="select" id="Duracion" className="Duracion" onChange={OnchenageDuration} value={duracion}>
              <option value={"1"} > 1</option>
           <option value={"2"} > 2</option>
           <option value={"3"} > 3</option>
           <option value={"4"} > 4</option>         
           <option value={"5"} > 5</option>
          </select>
           <br/>
           <br/>      
           <label htmlFor="">Temporada</label>
           <select name= "select" id="Temporada"className="Temporada" onChange={OnchenageTemporada} value={Temporada}>
           <option value={"Primavera"} > Primavera</option>
           <option value={"Verano"} >    verano</option>
           <option value={"Otoño"} >     Otoño</option>
           <option value={"Invierno"} >  Invierno</option> 
          </select>
           <br/>
           <br/>           
         


           
       </form>


    </div>


}

