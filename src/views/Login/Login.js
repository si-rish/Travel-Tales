import React,{ useState } from "react"
import "./Login.css"

import Loged from  "./../Login/Loged";

function Login()  {

    const[namelog,setnamelog]=useState("");
    const[emaillog,setEmaillog]=useState("");
    const[passwordlog,setPasswordlog]=useState("");
    const[flaglog,setFlaglog]=useState("false");
    const[loged,setLoged]=useState("true");

    function handleLogin(e){
        e.preventDefault();
        const mail=localStorage.getItem("Email").replace(/''/g,"");
        const  pass=localStorage.getItem("Password").replace(/''/g,"");

        if(!emaillog.log || passwordlog){
            setFlaglog(true);
            console.log("Empty");
        }
        else if(passwordlog !== pass || pass || emaillog !==mail){
            setFlaglog(true)
        }
        else{
            setLoged(!loged);
            setFlaglog(false);
        }
    }
    function handleclick(){
       setLoged (!loged)
    }
    return(
        <div className='Login'>
            {loged ? (
         <form onSubmit={handleLogin}>
            <h1>Login</h1>
         <div className='form-group'>
              <label>Email</label>
              <input
              type="text"
              className="form-control"
              placeholder='Enter Email'
              required
              onChange={(event)=>setEmaillog(event.target.value)}
              /></div>
              
              <div className='form-group'>
              <label>Password</label>
              <input
              type="text"
              className="form-control"
              placeholder='Enter Password'
              required
              onChange={(event)=>setPasswordlog(event.target.value)}

              /></div>
                <button type="submit" className="button btn btn-dark btn-lg btn-block" onClick={handleclick}>Login</button>
         
            
              </form>):(
<Loged/>
     )}
      </div>
    )
    
}

export default Login