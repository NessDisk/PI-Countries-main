
import { Link } from "react-router-dom"
import React from 'react';

export default function  Countrys()
{


    return <div>

        <Link   to={`/p`}>
<input type="submit"

style={{
    color: "red",    
    width: '100px',
    height: '40px',
    position: "absolute",
    right: 675,
    bottom: 350,}
}

value={"Inicio"}
/>
        </Link>

    </div>
}
