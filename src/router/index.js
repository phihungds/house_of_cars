import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service"
import Contact from "../pages/Contact"
import CarInfo from "../pages/CarInfo";
import NewCar from "../pages/NewCar";
import RepairsChild from "../pages/Manager/Repair";
import ManageCars from "../pages/Manager/ManageCars";
import EditCar from "../pages/Manager/EditCar";
import ScheduleRepair from "../pages/ScheduleRepair"
import AccountManager from "../pages/Manager/Account";

export default function Index () {
    return (
        <BrowserRouter>
    
          <div className="main-route-place">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
               <Route path="/home" element={<Home />} />
               <Route path="/about" element={<About />} /> 
               <Route path="/service" element={<Service />} /> 
               <Route path="/contact" element={<Contact />} />  
               <Route exact path={'/car/add'} element={<NewCar/>} />
                <Route exact path={`/car/:carId`} element={<CarInfo/>} />
                <Route path="/manager" element={<ManageCars />} />  
                
                <Route path="/manager/repairs" element={<RepairsChild/>} />  
              <Route path={`/ecar/:carId`} element={<EditCar/>} /> 
              <Route path="/schedule-repair" element={<ScheduleRepair/>} />
              <Route path="/manager/account" element={<AccountManager/>} />  
            </Routes>
            </div>
        </BrowserRouter>
      )
}