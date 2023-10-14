import { useState,useEffect } from "react"
import "./Signup.css"
import Login from '../../views/Login/Login';

import showToast from 'crunchy-toast';

 function Registration()  {

  const [name, setName] = useState('')
  const[login,setLogin]=useState(true);
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [save, setSave] = useState([]);
 
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('details'));
    if (existingData && existingData.length > 0) {
      setSave(existingData);
    }
  }, []);

  const EmailValid = (email) => {

    const check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return check.test(email);
  };

  const requiredFields = () => {
    if (!email) {
      showToast('Enter Email', 'warning', 3000);
      return false;
    }
    if (!EmailValid(email)) {
      showToast('Enter Valid Email', 'warning', 3000);
      return false;
    }

    if (!password) {
      showToast('Enter Password', 'warning', 3000);
      return false;
    }

    if (password !== confirmPassword) {
      showToast('Password do not Match', 'warning', 3000);
      return false;
    }
   

    return true;
  }

 


  const handleSignup = () => {
    if (requiredFields() === false) {
      return;
    }

    const isEmailAlreadyExists = save.find((user) => {
      return user.email === email
    });

    if (isEmailAlreadyExists) {
      showToast('Entered Email is already Exist Please try different Email', 'warning', 3000);
      return;
    }

    const obj = {
      email: email,
      password: password,
      name: name,
    login:login,
      phone: phone,
    };
    const temp = [...save, obj];
    setSave(temp);
    localStorage.setItem('details', JSON.stringify(temp));
    console.log("Saved in Local Storage");
    showToast('Registered Successfully', 'success', 3000);
    setLogin(!login)
  
  }

   function handleClick(){
    setLogin(!login);
   }

   
    return(
        <div className="p-4">

            { login ? (
          <form >
            <h1>Register</h1>
            <div className='form-group'>
              <label>Name</label>
              <input
              type="text"
              className="form-control"
              placeholder='Enter Full Name'
              value={name}
            
              onChange={(e)=>setName(e.target.value)}
              /></div>
              
              <div className='form-group'>
              <label>Email</label>
              <input
              type="email"
              value={email}
              className="form-control"
              placeholder='Enter email'
              required
              onChange={(e)=>setEmail(e.target.value)}
         
              /></div>

              <div className='form-group'>
              <label>Phone</label>
              <input
              type="phone"
              className="form-control"
              placeholder='Enter Contact  no'
              required
              value={phone}
        
              onChange={(e)=>setPhone(e.target.value)}

              /></div>

              <div className='form-group'>
              <label>Password</label>
              <input
              type="password"
              className="form-control"
              placeholder='Enter password'
              required
              value={password}
                
          
              onChange={(e)=>setPassword(e.target.value)}
              /></div>
               <div className='form-group'>
              <label> Confirm Password</label>
              <input
              type="password"
              className="form-control"
              placeholder='Enter password'
              required
              value={confirmPassword}
                 
          
              onChange={(e)=>setConfirmPassword(e.target.value)}
              /></div>

        <button   onClick={handleSignup} type="submit" className="text-right button btn btn-dark  btn-lg btn-block" >Register</button>



        <p className="forgot-password " onClick={handleClick}>Already Registered{" "}Login in</p>


     
          </form>
          ):(
          <Login/>)}
          
        </div>
    )
    
}
export default Registration