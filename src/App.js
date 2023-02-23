import {Route, Routes} from "react-router-dom";
// import Welcome from "./pages/Welcome/Welcome"
import SearchBar from "./components/SearchBar/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Filters from "./components/Filters/filters";

function App() {
  return (
    <>
    <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/search" element={<SearchBar />} />
        <Route path="/" element={<Filters />} />
    </Routes>
    </>
  );
}

export default App;
