import React, { useState } from 'react';

import { StyleContext } from "../context/StyleContext";

import { Second } from "./Second";

export const First = () => {

  const incFontSize1 = () => { setStyle1( style => ({...style, fontSize: style.fontSize+1}) ) };
  const incFontSize2 = () => { setStyle2( style => ({...style, fontSize: style.fontSize+1}) ) };

  const [style1,setStyle1]=useState( { fontSize:18, color:"blue", incFontSize:incFontSize1 } );
  const [style2,setStyle2]=useState( { fontSize:22, color:"red",  incFontSize:incFontSize2 } );

  return (
    <>
        <StyleContext.Provider value={ style1 }>
          <Second />
        </StyleContext.Provider>
        <br/><br/>
        <StyleContext.Provider value={ style2 }>
          <Second />
        </StyleContext.Provider>
    </>
  );

};
