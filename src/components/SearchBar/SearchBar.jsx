import React,{useState} from 'react'
import { Link } from "react-router-dom"
import './SearchBar.css'
import "bootstrap/dist/css/bootstrap.min.css";



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [data, setData] = useState([]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
let filteredData = [];
  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:8080/api/mercardillo/anuncios`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setData(data.filter(data => data.marca.marca.toLowerCase().includes(searchTerm.toLowerCase())));
        console.log(filteredData);
        // Aquí debes mostrar los resultados de la búsqueda
      });
  }
  return (
     <div className='p-2'>
        <form className="d-flex" onSubmit={handleSubmit} role="search">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search m-1 pt-2"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
        <input className="bg-4 form-control me-2" type="search" placeholder="Busca tu coche..." aria-label="Search" value={searchTerm} onChange={handleChange}/>
        <button className="btn bg-2" type="submit">Busca</button>
        {/* comentado, si queremos utilizarlo descomentar */}
      </form>

      {
      data.map((item) => ( 
                 <div key={item.id}>
                <h1>{item.nombre}</h1>
                <h1>{item.marca.marca}</h1>
                <p>Asientos: {item.asientos}</p>
                <h3>{item.precio} $ </h3>
                <div>
                  <Link to='/cardid'>
                    <button>Alquilar </button>{' '}
                  </Link>
                </div> 
                </div> 
      ))
      }
     </div>
  );
}


export default SearchBar;