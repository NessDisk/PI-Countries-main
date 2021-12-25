import React from 'react';

import "./Box.css";

import { colors } from "../../constante/colors";

export default function  Box({colorBox , distancia, colorText, textinfo})
{
  
    return  <h2 className='Box'
    style={{
      color: colorText, 
      backgroundColor: colorBox,
      width: '100px',
      height: '40px',
      position: "absolute",
      right: distancia,
      bottom: 675,

    }}
  > {textinfo}</h2>
}