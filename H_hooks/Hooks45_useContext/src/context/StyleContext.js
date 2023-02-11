import React from 'react';

// here is just a shape of the context and the default values
// they will be used only if there's no <Provider> for this context
// actual values will be set when use StyleContext.Provider
export const StyleContext = React.createContext( {
    fontSize: 33, 
    color: "black",
    incFontSize: null, // will be used as a function to increase fontSize
} );
