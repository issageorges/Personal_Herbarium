import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddPlant from "./components/plant/AddPlant";
import Login from '../src/pages/Login.jsx'
import Register from '../src/pages/Register.jsx'
import PlantItem from "./components/plant/Plant.jsx";

export default function Routing() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/AddPlant" element={<AddPlant />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/plant/:plantId" element={<PlantItem />} />
     </Routes> 
    </>
  );
}

