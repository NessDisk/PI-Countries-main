import { Link } from "react-router-dom"
export default function  Country({id,name, flag} )
{
    return <div>
      <Link to={`/${id}`}>
      <h1> {name}</h1> 
      <img src={flag}/>
      </Link>
          
    </div>
}