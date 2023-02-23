import React from 'react'
import NavigatioBar from '../../components/NavigationBar/NavigationBar'
import Card from '../../components/CarCard/Card'
import "./home.scss";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
      <div>
        <div className="cont">

        <NavigatioBar/>
        <h1>Búsqueda</h1>
        <div className= "d-flex justify-content-center"> 
        <Card/> 
        <Footer/>
        </div>
        
        


        </div>
      </div>
  );
}

export default Home