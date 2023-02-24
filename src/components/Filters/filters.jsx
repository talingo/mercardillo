import React from 'react'
import './filters.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Filters = () => {
  return (
     <div className='p-2'>
        <select className="bg-4 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Selector de categoria</option>
            <option value="1">Primera categoría</option>
            <option value="2">Segunda categoría</option>
            <option value="3">Tercera categoría</option>
        </select>
     </div>
  );
}


export default Filters;