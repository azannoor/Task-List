import { useState } from "react"
import Signup from "./Signup"
import { Link } from "react-router-dom"

function Login(){
    const [email,setEmail] = useState("")
    const [password,setPasswords] = useState("")
    const [login, setlogin] = useState(true)

    const passHandler = (event)=>{
        setPasswords(event.target.value)
    }
    const Email = (event)=>{
        setEmail(event.target.value)
    }

    const handleLogin = ()=>{
        setlogin((prev)=>{
            !prev
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        console.log(email)
        console.log(password)
    }
return(
<div>
    <div><h1>Login</h1><form>

<label for='email'>Email:</label>
<input type="text" value={email} onChange={Email} required></input><br/><br/>

<label for='password'>Password:</label>
<input type="password" value={password} onChange={passHandler} required></input><br/><br/>

<button type="submit">Login</button><br></br>
<Link to={"/"}>

<button>switch to signup</button>

</Link>


</form>


</div> 




    
</div>
)
}
export default Login