import {useState} from "react"
import { useNavigate } from "react-router-dom"
function AdminLogin(){
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    let [error,setError]=useState("")
    let navigate=useNavigate()
    let login=(event)=>{
        event.preventDefault()
        if (username=="admin" & password=="admin"){
            console.log("login success")
            navigate("/adminhome")
        }else{
            console.log("login failed")
            setError("Invalid username & password")
        }
    }
    return(
        <div>
            <form onSubmit={login}>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter username"></input><br/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"></input><br/>
                <button type="submit">Admin Login</button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
export default AdminLogin