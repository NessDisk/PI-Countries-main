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
      
   

     // ciudades  activas
     let ciudades = []
       ciudades  =  document.getElementsByClassName("ciudades")

   let result = []
     let  AuxResult ={}
     let auxIndex;
    for(let i = 0 ; i < ciudades.length; i++)
    {
            if(ciudades[i].checked === true)
            {
               AuxResult[ciudades[i].name] = ciudades[i].name
                //  result.push(ciudades[i])
                
            }
    }

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
        console.log('You clicked submit.');
        // var x = document.createElement("INPUT");
        // x.setAttribute("type", "button");
        // x.setAttribute("value", "Click me");
        // document.body.appendChild(x);
        document.getElementById(2)
        console.log(   document.getElementById(2).checked);
// debugger
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
           <br/>     
           <label htmlFor="">name activity</label>
           <input type="text" onChange={OnchenageActivity} value={name}/>
           <br/>      
           <label htmlFor="">Dificulty</label>
           <input type="text" onChange={OnchenageDificulty} value={Dificulty}/>
           <br/>     
           <label htmlFor="">Duracion</label>
           <input type="text" onChange={OnchenageDuration} value={duracion}/>
           <br/>     
           <label htmlFor="">Temporada</label>
           <input type="text" onChange={OnchenageTemporada} value={Temporada}/>
           <br/>       
           <h2> seleccionas actividad para las ciudades</h2>
           { Countryx.map( (country)=>{

                return<div>
                     <input type="checkbox" className="ciudades" key={country.id} name={country.name} /> {country.name} 
                </div>
            })  }

           <input type="submit" />   

           
       </form>

</div>
<div>

{/* {<input type="checkbox" id={2} name= "aa" /> hola mundo



<form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>} */}

</div>
    </div>
   }