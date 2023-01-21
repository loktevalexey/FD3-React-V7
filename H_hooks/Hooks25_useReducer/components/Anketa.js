import React, { useReducer } from 'react';

import "./Anketa.css";

function personReducer(state, action) {
  switch (action.type) {
    case 'age1':
      return {...state, age: state.age+1};
      //return {gender: state.gender, age: state.age+1};
    case 'ageN':
      return {...state, age: state.age+action.val};
    case 'genderM':
      return {...state, gender: "М"};
    case 'genderF':
      return {...state, gender: "F"};
    default:
      //return state;
      throw new Error('unknown action');
  }
}

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
