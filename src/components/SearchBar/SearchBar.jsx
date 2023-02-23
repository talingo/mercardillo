import React from 'react'
import './SearchBar.css'
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
  return (
     <div class='p-2'>
        <form class="d-flex" role="search">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search m-1 pt-2"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
<input class="bg-4 form-control me-2" type="search" placeholder="Busca tu coche..." aria-label="Search"/>
        {/* <button class="btn bg-2" type="submit">Busca</button> */}
        {/* comentado, si queremos utilizarlo descomentar */}
      </form>

     </div>
  );
}


export default SearchBar;