import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardCoche from "./components/card/CardCoche";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/card" element={<CardCoche/>} />
    </Routes>
    </>
  );
}

export default App;
