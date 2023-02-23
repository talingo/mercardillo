import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';




function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
    </Routes>

    </>
  );
}

export default App;
