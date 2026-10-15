import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import MainLayout from "../layouts/MainLayout";
function AppRoutes(){
    return(
<>

<Routes>
    <Route element={<MainLayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/register" element={<Register/>}/>
    </Route>
</Routes>

</>
    );
}
export default AppRoutes;