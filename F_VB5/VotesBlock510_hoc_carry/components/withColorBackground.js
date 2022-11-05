import React from 'react';

function withColorBackground(color) {
    return function(Comp) {
      return props => (
        <div style={{backgroundColor:color,border:"solid red 1px"}}>
          <Comp {...props} />
        </div>
      );
    };
}

// let withColorBackground = color => Comp => props =>
//     <div style={{backgroundColor:color,border:"solid red 1px"}}>
//       <Comp {...props} />
//     </div>
// ;

export { withColorBackground };
