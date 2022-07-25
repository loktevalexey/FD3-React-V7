import React from 'react';

// вариант с возвратом классового компонента
// function withColorBackground(color) {
//     return function(Comp) {
//       return props => (
//         <div style={{backgroundColor:color,border:"solid red 1px"}}>
//           <Comp {...props} />
//         </div>
//       );
//     };
// }

// вариант с возвратом функционального компонента
let withColorBackground = color => Comp => props =>
    <div style={{backgroundColor:color,border:"solid red 1px"}}>
      <Comp {...props} />
    </div>
;

export { withColorBackground };
