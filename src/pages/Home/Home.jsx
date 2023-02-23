import React from 'react'
import NavigatioBar from '../../components/NavigationBar/NavigationBar'
import Card from '../../components/CarCard/Card'
import "./home.scss";
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar'
const Home = () => {
  return (
      <div>
        <div className="cont">

        <NavigatioBar/>
        <SearchBar />
        <div className= "d-flex justify-content-center"> 
        <Card/> 
        <Footer/>
        </div>
        
        </div>
      </div>
  );
}

export default Home