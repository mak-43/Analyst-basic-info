import { Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Information from "./Pages/Information";

function App() {
  return (
    <div >
      <Navbar/>
      <Information></Information>
    
      <Footer/>
    </div>
  );
}

export default App;
