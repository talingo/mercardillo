import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Card from "./components/card/Card";
import ViewCard from "./components/card/ViewCard";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Welcome />} />
        
        <Route path="/card" element={<Card/>} />
        <Route path="/cardid" element={<ViewCard/>} />
        <Route path="/home" element={<Home />} />
    </Routes>

    </>
  );
}

export default App;
