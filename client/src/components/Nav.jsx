
import { Link } from "react-router-dom"
import Box from "./nav/box"

export default function  Nav()
{
    return <div>
        <Link to={"/p"}>
        <Box colorBox={"green"} distancia={1300} colorText={"white"} textinfo={"inicio"}/>
        </Link>
        <Link to={"/add"}>
        <Box colorBox={"red"} distancia={1175} colorText={"white"} textinfo={"Añadir"} />
        </Link>
   
    </div>

}