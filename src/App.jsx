import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormCar from "./components/form/FormCar";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Welcome />} />
      </Routes>
      <FormCar />
      
    </>
  );
}

export default App;
