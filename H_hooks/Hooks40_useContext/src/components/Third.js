import React, { useContext } from 'react';

import { StyleContext } from "../context/StyleContext";

export const Third = () => {

  const currStyle = useContext(StyleContext); // gets what the nearest StyleContext.Provider provides

  console.log("render Third component with fontSize="+currStyle.fontSize);

  return (
    <div style={ { fontSize: currStyle.fontSize, color: currStyle.color } }>
      text text text text text <input type="button" value="inc font size" onClick={currStyle.incFontSize} />
    </div> 
  );

};
