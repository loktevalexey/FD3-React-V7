import React, { useState, useEffect } from 'react';

import Counter from "./Counter";

export default props => {

  const [show, setShow] = useState(false);

  return (
    <div>
      Счётчик виден: {show?"да":"нет"}<br/>
      <button onClick={ () => setShow(true) }>показать</button>
      <button onClick={ () => setShow(false) }>скрыть</button>
      {
        show && <Counter/>
      }
    </div>
  );
};
