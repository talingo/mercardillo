import React from 'react'
import NavigatioBar from '../../components/NavigationBar/NavigationBar'
import ViewCard from '../../components/CarCard/ViewCard';
import Footer from '../../components/Footer/Footer';


const Details = () => {
  return (
      <div>
        <div className="cont">

        <NavigatioBar/>
        
        <div className= "d-flex justify-content-center"> 
        <ViewCard/> 
        <Footer/>
        </div>
        
        </div>
      </div>
  );
}

export default Details