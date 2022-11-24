import React from 'react';
import { observer } from "mobx-react"

// "observer" passes any changes to this component as a property, forcing it to rerender.
// MobX detects automatically that this component needs only "apples" property from the plateModel
// and will rerender only if this property changes
export const PlateApplesView = observer( ( { plateModel } ) => {
  
  console.log("PlateApplesView rerender, apples="+plateModel.apples);

  return (
    <>
      <div>There are {plateModel.apples} apples on the plate.</div>
    </>
  );

} );
