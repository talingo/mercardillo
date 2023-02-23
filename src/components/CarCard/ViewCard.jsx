import React from 'react'
import "./viewcard.scss";
// import Details from '../../pages/Details/Details';


const ViewCard = () => {
  return (
    <div>
        <div className='container2'>
            <div className='img2'>
                 <img src="https://gomore.imgix.net/uploads/car_picture/image/676941/car_7fb87d3f-7efc-4057-995f-4d6fb272e173.jpg?ixlib=rails-2.1.2&fit=crop&w=770&h=513&auto=format%2Ccompress" alt="" />
                 {/* <img src={props.image} alt="" /> */}
            </div>

            
            <div className='text2'> 
                <h1>Usuario: Victor</h1> 
                <p>Modelo: Ferrari </p>
                <h3>2 Asientos </h3>
                <h3>Precio diario: 100€</h3>
                <h3>Provincia: Madrid</h3>
                <button>ALQUILAR</button>
            </div>

        </div>
    </div>
  )
}

export default ViewCard