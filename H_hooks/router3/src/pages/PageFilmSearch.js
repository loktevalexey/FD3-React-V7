import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const PageFilmSearch = () => {
          
    let [filmName,setFilmName]=useState("");

    let navigate = useNavigate();

    function goToFilmDetails() {
      navigate("/details/"+filmName);
      //navigate("/details/"+encodeURIComponent(filmName));
    }

    return (
      <div>
        Input a film name:<br/>
        <input type="text" value={filmName} onChange={ eo => setFilmName(eo.target.value) } /><br/>
        <input type="button" value="Search" onClick={goToFilmDetails} />
      </div>
    );
    
};
