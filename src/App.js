import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
