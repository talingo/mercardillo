import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CardCoche from "./components/CarCard/CardCoche";
import Card from "./components/CarCard/Card";
import ViewCard from "./components/CarCard/ViewCard";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/card" element={<CardCoche/>} />
        <Route path="/card2" element={<Card/>} />
        <Route path="/cardid" element={<ViewCard/>} />
        <Route path="/home" element={<Home />} />
    </Routes>

    </>
  );
}

export default App;
