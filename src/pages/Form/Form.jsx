import React from 'react'
import NavigatioBar from '../../components/NavigationBar/NavigationBar'
import Footer from '../../components/Footer/Footer';
import FormCar from "../../components/Form/FormCar";

const Form = () => {
  return (
      <div>
        <div className="cont">

        <NavigatioBar/>
        <FormCar />
        <div className= "d-flex justify-content-center"> 
        <Footer/>
        </div>
        
        </div>
      </div>
  );
}

export default Form