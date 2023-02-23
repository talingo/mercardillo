import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Details from './pages/Details/Details';
import Form from './pages/Form/Form';




function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cardid" element={<Details />} />
        <Route path="/form" element={<Form />} />
    </Routes>
    </>
  );
}

export default App;
