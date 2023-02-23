import React, { useState, useEffect } from 'react';
import './card.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:8080/api/mercardillo/anuncios';

const Card = () => {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    getAllElements();
  }, []);

  const getAllElements = async () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setElementos(response.data);
    });
  };

  return (
    <div>
      <div className='cont1'>
        <div className='img'>
          <img
            src='https://gomore.imgix.net/uploads/car_picture/image/676941/car_7fb87d3f-7efc-4057-995f-4d6fb272e173.jpg?ixlib=rails-2.1.2&fit=crop&w=770&h=513&auto=format%2Ccompress'
            alt=''
          />
          {/* <img src={props.image} alt="" /> */}
        </div>

        <div className='text'>
          {elementos.map((elemento) => (
            <div key={elemento.id}>
              <h1>{elemento.nombre}</h1>
              <h1>{elemento.marca.marca}</h1>
              <p>{elemento.asientos}</p>
              <h3>Precio $150 </h3>
              <div>
                <Link to='/cardid'>
                  <button>Alquilar </button>{' '}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;