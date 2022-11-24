import React from 'react';
import { observer } from "mobx-react"

// "observer" passes any changes to this component as a property, forcing it to rerender.
// MobX detects automatically that this component needs only "pears" property from the plateModel
// and will rerender only if this property changes
export const PlatePearsView = observer( ( { plateModel } ) => {
  
  console.log("PlatePearsView rerender, pears="+plateModel.pears);

  return (
    <>
      <div>There are {plateModel.pears} pears on the plate.</div>
    </>
  );

} );
