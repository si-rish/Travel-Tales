import { useState } from "react"
import "./Signup.css"
import Login from '../../views/Login/Login';
import { Alert } from "@chakra-ui/react";


 function Registration()  {



    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const[flag,setFlag]=useState("false");
    const[login,setLogin]=useState(true);
   function handleSubmit(e){
    e.preventDefault();
   if(!name|| !email || !password || !phone){
    setFlag(true);
   }
   else{
    setFlag(false);
    localStorage.setItem("Name",JSON.stringify(name));
    localStorage.setItem("Email",JSON.stringify(email));
    localStorage.setItem("Password",JSON.stringify(password));

    console.log("Saved in Local Storage")
    setLogin(!login);
   }

   }

   function handleClick(){
    setLogin(!login);
   }

   
    return(
        <div className="p-4">

            { login ? (
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-group'>
              <label>Name</label>
              <input
              type="text"
              className="form-control"
              placeholder='Enter Full Name'
              
              onChange={(event)=>setName(event.target.value)}
              /></div>
              
              <div className='form-group'>
              <label>Email</label>
              <input
              type="email"
              className="form-control"
              placeholder='Enter email'
              required
              onChange={(event)=>setEmail(event.target.value)}

              /></div>

              <div className='form-group'>
              <label>Phone</label>
              <input
              type="phone"
              className="form-control"
              placeholder='Enter Contact  no'
              required
              onChange={(event)=>setPhone(event.target.value)}

              /></div>

              <div className='form-group'>
              <label>Password</label>
              <input
              type="password"
              className="form-control"
              placeholder='Enter password'
              required
              onChange={(event)=>setPassword(event.target.value)}
              /></div>
        <button type="submit" className=" button btn btn-dark  btn-lg btn-block" >Register</button>
        <p className="forgot-password text-right" onClick={handleClick}>Already Registered{" "}Login in</p>


     
          </form>
          ):(
          <Login/>)}
          
        </div>
    )
    
}
export default Registration