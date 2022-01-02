
import { Link } from "react-router-dom"
import React from 'react';
import { useEffect } from 'react';

import background from "../asset/mapamundi.jpg";
import styles from "./inicial.module.css";


// import styless from "./../asset/video.mp4";

export default function  Inicial()
{
    useEffect(() => {
        // var video = document.getElementById(styles.myVideo);
        // var btn = document.getElementById(styles.myBtn);
        
        // function myFunction() {
        //   if (video.paused) {
        //     video.play();
        //     btn.innerHTML = "Pause";
        //   } else {
        //     video.pause();
        //     btn.innerHTML = "Play";
        //   }
        // }


}, []);

    return <div>

<div style={{ backgroundImage: `url(${background})`,
   backgroundPosition: 'center',
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   width: '100vw',
   height: '100vh'
}}/>

   
{/*     
  <div style={{ backgroundImage: "url(/image.png)" }}>
  Hello World
</div> */}

{/* <img src={`https://via.placeholder.com/500` 
}/> */}
    {/* <div style={{ 
      backgroundImage: "https://via.placeholder.com/500" 
    }}>
      Hello World
    </div> */}
        {/* <Link   to={`/p`}>
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
        </Link> */}

        <div class={styles.content}>
  <h1>Heading</h1>
  <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
  <Link   to={`/p`}>
  <button type="submit" id={styles.myBtn} onclick="myFunction()">Pause</button>
  </Link>
</div>


{/* <video autoplay muted loop id={styles.myVideo}>
  <source src="video.mp4" type="video/mp4"/>
  Your browser does not support HTML5 video.
</video> */}

{/* <video
           src={require('./../asset/video.mp4')}
          controls
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
        > something</video>
<video autoplay="">
       <source src={require('./../asset/video.mp4')} type="video/mp4" />
</video> */}






    </div>
}
