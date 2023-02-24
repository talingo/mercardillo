import {Route, Routes} from "react-router-dom";
// import Welcome from "./pages/Welcome/Welcome"
import SearchBar from "./components/SearchBar/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Filters from "./components/Filters/filters";

function App() {
  return (
    <>
        <SearchBar></SearchBar>
        <Filters></Filters>
    </>
  );
}

export default App;
