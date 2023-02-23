import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Welcome />} />
      </Routes>
      
    </>
  );
}

export default App;
