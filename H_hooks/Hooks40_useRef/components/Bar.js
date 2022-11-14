import React, { useRef } from 'react';

import "./Bar.css";

export default props => {

  const barRef=useRef(null);

  const measure = () => {
    if ( barRef.current )
      console.log("ширина = "+barRef.current.offsetWidth);
  };

  return (
    <div ref={barRef} className="Bar">
      Однажды в студёную зимнюю пору я из лесу вышел был сильный мороз
      <input type="button" value="измерить" onClick={measure} />
    </div>
  );
};
