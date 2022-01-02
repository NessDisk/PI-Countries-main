import { useDispatch, useSelector } from "react-redux"
import { AddNewActivity, getAllCountry, getAllActivity } from "../store/actions"
import { useEffect, useState} from "react"



export default  function  AddActivity()
{
    let Countryx  = useSelector((state) => state.countris)
    let Activty  = useSelector((state) => state.activty)

   
    
    const [name, setNombre] = useState(``)
    const [Dificulty, setDificulty] = useState(``)
    const [duracion, setDuration] = useState(``)
    const [Temporada, setSeason] = useState(``)
    
    let array

    let dispatch = useDispatch()

    async function  submitAction(e) {

    e.preventDefault();
      
    let DificultadAux  =  document.getElementById("Dificultad")
    let DuracionAux = document.getElementById("Duracion")
    let TemporadaAux = document.getElementById("Temporada")
    setDificulty(DificultadAux.value)
    setDuration(DuracionAux.value)
    
    setSeason(TemporadaAux.value)
      
 
    //    console.log(DificultadAux.value)
 //    { Dificultad
 //     Duracion
 //     Temporada}
 // ciudades  activas

 

     let ciudades = []
       ciudades  =  document.getElementsByClassName("ciudades")

     let result = []
     let  AuxResult ={}
     let auxIndex;
    for(let i = 0 ; i < ciudades.length; i++)
    {
            // if(ciudades[i].checked === true)
            // {
            //    AuxResult[ciudades[i].name] = ciudades[i].name
            //     //  result.push(ciudades[i])
                
            // }
            // result.push(ciudades[i].target.value)
            AuxResult[ciudades[i].value] = ciudades[i].value
            
    }
   
for (index = ciudades.length - 1; index >= 0; index--) {
    ciudades[index].parentNode.removeChild(ciudades[index]);
}
console.log(AuxResult);

      //crea la nueva actividad  post
      await dispatch(AddNewActivity(
        {
            actividad:{name ,Dificulty,duracion,Temporada},
            AuxResult
        }
     ))

// console.log(AuxResult);
}


   

    function handleSubmit(e) {
        e.preventDefault();
        // console.log('You clicked submit.');
        // // var x = document.createElement("INPUT");
        // // x.setAttribute("type", "button");
        // // x.setAttribute("value", "Click me");
        // // document.body.appendChild(x);
        // document.getElementById(2)
        // console.log(   document.getElementById(2).checked);
        // var btn = document.createElement("BUTTON");
        // btn.innerHTML = "CLICK ME";
        var sel = document.createElement("select");
        sel.className = "ciudades";
        sel.name= "select";
        for (let index = 0; index < Countryx.length; index++) {
            const element = Countryx[index];
            var opt1 = document.createElement("option");
            // className="ciudades" key={country.id} name={country.name}
           
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

    return <div>
<div>

        <form onSubmit={submitAction}>
         <h5>llena el formulario para aregar una nueva actividad</h5>
           <br/>     
           <label htmlFor="">Nombre</label>
           <input type="text" onChange={OnchenageActivity} value={name}/>
           <br/>          
           <br/>
           <label htmlFor="">Dificultad</label>
           <select name="select" id="Dificultad" onChange={OnchenageDificulty} value={Dificulty}>
           <option value={"1"} > 1</option>
           <option value={"2"} > 2</option>
           <option value={"3"} > 3</option>
           <option value={"4"} > 4</option>         
           <option value={"5"} > 5</option>
          </select>
          <br/>
           <br/> 
           
           <label htmlFor="">Duracion</label>
           <select name="select" id="Duracion" onChange={OnchenageDuration} value={duracion}>
           <option value={"1"} > 1</option>
           <option value={"2"} > 2</option>
           <option value={"3"} > 3</option>
           <option value={"4"} > 3</option>         
           <option value={"5"} > 5</option>
          </select>
           <br/>
           <br/>      
           <label htmlFor="">Temporada</label>
           <select name= "select" id="Temporada" onChange={OnchenageTemporada} value={Temporada}>
           <option value={"Primavera"} > Primavera</option>
           <option value={"Verano"} >    verano</option>
           <option value={"Otoño"} >     Otoño</option>
           <option value={"Invierno"} >  Invierno</option> 
          </select>
           <br/>
           <br/>           
           <h2> seleccionas actividad para las ciudades</h2>
           {/* { Countryx.map( (country)=>{

                return<div>
                     <input type="checkbox" className="ciudades" key={country.id} name={country.name} /> {country.name} 
                </div>
            })  } */}

           <input type="submit" />   

           
       </form>

</div>
<div>

{/* {<input type="checkbox" id={2} name= "aa" /> hola mundo


*/}
<form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>


{/* <button onclick={console.log("test")} >Try it</button> */}
</div>
    </div>
   }