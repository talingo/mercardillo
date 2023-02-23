import React from 'react'
import "./card.scss";



const card = (props) => {
  return (
    <div>
        <div className='container'>
            <div className='img'>
                 <img src="https://gomore.imgix.net/uploads/car_picture/image/676941/car_7fb87d3f-7efc-4057-995f-4d6fb272e173.jpg?ixlib=rails-2.1.2&fit=crop&w=770&h=513&auto=format%2Ccompress" alt="" />
                 {/* <img src={props.image} alt="" /> */}
            </div>

            <div className='text'> 
                <h1>Mercedes</h1> 
                <p>4 Asientos </p>
                <h3>Precio $150 </h3>
                <button>ALQUILAR</button>
            </div>

        </div>
    </div>
  )
}

export default card