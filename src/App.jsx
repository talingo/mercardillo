import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CardCoche from "./components/card/CardCoche";
import Card from "./components/card/Card";
import ViewCard from "./components/card/ViewCard";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/card" element={<CardCoche/>} />
        <Route path="/card2" element={<Card/>} />
        <Route path="/cardid" element={<ViewCard/>} />
    </Routes>
    </>
  );
}

export default App;
