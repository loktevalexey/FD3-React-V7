import { updateLoadState, updateData } from "./weatherSlice.js";

// we'll use this asyncronous action-function INSTEAD of a regular action-object
// the thunk will just execute this action-function instead of passing it to reducers
// the thunk with pass dispatch-function as an argument to this action-function

export async function weatherLoad(dispatch) {
    try {
      dispatch( updateLoadState({state:1,error:null}) );
      const response=await fetch("https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series/globe/land_ocean/ytd/12/1880-2016.json");
      if ( response.ok ) {
        const data=await response.json();
        dispatch( updateLoadState({state:2,error:null}) );
        dispatch( updateData(data) );
      }
      else {
        dispatch( updateLoadState({state:3,error:"HTTP error "+response.status}) );
      }
    }
    catch ( err ) {
      dispatch( updateLoadState({state:3,error:err.message}) );
    }
};
