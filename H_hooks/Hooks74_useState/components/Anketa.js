import React, { useState } from 'react';

import "./Anketa.css";

export default props => {

  const [age, setAge] = useState(25);

  return (
    <div>
      Возраст: {age}<br/>
      <button onClick={ () => setAge(16) }>установить 16</button>
      <button onClick={ () => setAge(age+1) }>увеличить на 1</button>
      <button onClick={ () => setAge(prevAge => prevAge+1) }>увеличить на 1</button>
    </div>
  );
};
