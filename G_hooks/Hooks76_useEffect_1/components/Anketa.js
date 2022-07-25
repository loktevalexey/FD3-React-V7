import React, { useState, useEffect } from 'react';

import "./Anketa.css";

export default props => {

  const [age, setAge] = useState(25);

  useEffect(
    ()=>{
      fetch("https://fe.it-academy.by/Examples/Hotel/hotelinfo.json")
        .then( response => {
          return response.json();
        } )
        .then ( info => {
          console.log(age,info);
        } )
    },
    [] // массив зависимостей пуст - функция выполнится один раз, при монтировании компонента
  );

  return (
    <div>
      Возраст: {age}<br/>
      <button onClick={ () => setAge(16) }>установить 16</button>
      <button onClick={ () => setAge(prevAge => prevAge+1) }>увеличить на 1</button>
    </div>
  );
};
