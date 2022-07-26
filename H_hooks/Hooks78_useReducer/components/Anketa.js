import React, { useReducer } from 'react';

import { personReducer } from "./reducer";

import "./Anketa.css";

export default props => {

  const [personInfo, personDispatch] = useReducer(
    personReducer, 
     {age:25,gender:'M'}
  );

  return (
    <div>
      Возраст: {personInfo.age}<br/>
      Пол: {personInfo.gender}<br/>
      <button onClick={ () => personDispatch({type:'age1'}) }>возраст++</button>
      <button onClick={ () => personDispatch({type:'ageN',val:5}) }>возраст+=5</button>
      <button onClick={ () => personDispatch({type:'genderM'}) }>пол=М</button>
      <button onClick={ () => personDispatch({type:'genderF'}) }>пол=Ж</button>
    </div>
  );
};
