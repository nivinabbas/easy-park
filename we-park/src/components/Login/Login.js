import React from 'react';
import logo from "../../assets/logo_tp.png";
import "./Login.css"
const Login = (props) => {
    return (    
        <div>
               
                    <form className="container" >
                    <img src={logo} className="logoIcon"/>
                   <div>
                       <div>
                    <input type="text" placeholder="User Name" className="inputBox"/>
                    </div>
                    <input type="password" placeholder="Password" className="inputBox"/>
                    <br></br>
                    <button>Login</button>
                    <div>
                    <button>Register</button>
                    <button>Forget Password</button>
                    </div>
                    </div>
                    </form>
                    </div>
             
                
    
            );
}
 
export default Login;