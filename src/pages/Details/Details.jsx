import React from 'react'
import NavigatioBar from '../../components/NavigationBar/NavigationBar'
import ViewCard from '../../components/CarCard/ViewCard';
import "./home.scss";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
      <div>
        <div className="cont">

        <NavigatioBar/>
        <h1>Búsqueda</h1>
        <div className= "d-flex justify-content-center"> 
        <ViewCard/> 
        <Footer/>
        </div>
        
        </div>
      </div>
  );
}

export default Home