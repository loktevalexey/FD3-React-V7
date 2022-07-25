import React from 'react';

// вариант с возвратом функционального компонента
function withColorBackground(Comp) {
    // HOC withColorBackground должен вернуть КОМПОНЕНТ (т.е. класс)
    // в данном случае возвращаем компонент в функциональном стиле
    return props => (
      <div style={{backgroundColor:"yellow",border:"solid red 1px"}}>
        <Comp {...props} />
      </div>
    );
}

export { withColorBackground };
