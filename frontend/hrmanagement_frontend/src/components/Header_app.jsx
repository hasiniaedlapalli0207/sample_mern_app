import { Link } from "react-router-dom";
import './Header_app.css'
import services from "../pages/services";
function Header_app(){
 
    return(
        <div className="header">
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/AdminLogin">Admin Login</Link>

        </div>
    )
    
}
export default Header_app;