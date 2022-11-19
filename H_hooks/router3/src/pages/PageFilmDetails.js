import React from 'react';
import {useParams} from "react-router-dom";

export const PageFilmDetails = () => {
    
    const params = useParams();
    
    const filmName=params.filmname;

    return (
      <div>
        <h1>{filmName}</h1>
        <div>some information about the film "{filmName}"...</div>
      </div>
    );
    
}
