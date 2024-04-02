import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HOMEmain from "./pages/HOMEmain/homemain";
import List from "./pages/list/List";
import Hotels from "./pages/Hotels/hotels";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Profile from "./pages/Profile/Profile";
import Hotel from "./pages/Components/hotel/Hotel";
function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/hotels" element = {<List/>}/>
        <Route path = "/hotels/:id" element = {<Hotel/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/homemain" element = {<HOMEmain/>}/>
        <Route path = "/profile" element = { <Profile />} />
      </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;