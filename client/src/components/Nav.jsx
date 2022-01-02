
import { NavLink } from "react-router-dom"
import Box from "./nav/box"
import styles from "./nav.module.css";
import SearchB from "./searchtbar.jsx"
export default function  Nav()
{
    return <div  > 
     
        <ul>
            <NavLink to={"/p"}><li> <a class="active" href="#home">inicio</a></li></NavLink>

            <NavLink to={"/add"}> <li><a href="#news">Add Act</a></li> 
            </NavLink>
            <li><SearchB className={styles.SearchB}/></li>
        </ul>

    </div>

}