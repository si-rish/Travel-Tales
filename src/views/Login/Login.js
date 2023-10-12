import React,{ useState } from "react"
import "./Login.css"


import Loged from  "./Loged";

function Login()  {

    const[namelog,setnamelog]=useState("");
    const[emaillog,setEmaillog]=useState("");
    const[passwordlog,setPasswordlog]=useState("");
    const[flaglog,setFlaglog]=useState("false");
    const[loged,setLoged]=useState("true");

    function handleLogin(e){
        e.preventDefault();
        const mail=localStorage.getItem("Email",true);
                const  pass=localStorage.getItem("Password",true);

        if(emaillog ||  passwordlog ){
            setFlaglog(true);
           setLoged(!loged);
            console.log("Empty");
        
           
         
         
        }
        
           
            else if(passwordlog !== pass  || emaillog !==mail){
                setFlaglog(true)
                console.log("no");
                setLoged(!loged);
               
            }
            else{
                setLoged(!loged);
                setFlaglog(false);
                alert("email and pass is incorrect")
                console.log("No");
            }
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
                <button type="submit" value="submit" className="button btn btn-dark btn-lg btn-block" /*onClick={handleclick}*/>Login</button>
         
            
              </form>):(
<Loged/>
     )}
      </div>
    )
    
}

export default Login