import {Route, Routes} from "react-router-dom";
// import Welcome from "./pages/Welcome/Welcome"
import SearchBar from "./components/SearchBar/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<SearchBar />} />
    </Routes>
    </>
  );
}

export default App;
