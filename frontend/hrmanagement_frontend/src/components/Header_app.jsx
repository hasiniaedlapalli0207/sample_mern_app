import { Link } from "react-router-dom";
import './Header_app.css'
import services from "../pages/services";
function Header_app(){
 
    return(
        <div className="header">
         <Link to="/">Home</Link>
         <Link to="/">About</Link>
         <Link to="/">Contact</Link>
    

        </div>
    )
    
}
export default Header_app;