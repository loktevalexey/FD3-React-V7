import React from 'react';

import "./MobileClient.css";

// export default props => { 
//   let {fio,balance} = props;

export default ({fio,balance}) => { // деструктуризация - из аргумента props ключи fio и balance сразу превращаюется в переменные

  console.log("render MobileClient "+fio);

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{balance}</span>
      <span className='MobileClientFIO'>{fio}</span>
    </div>
  );
};
