import React,{ useState } from "react"
import './Login.css';
import showToast from 'crunchy-toast';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {

    const logindata = localStorage.getItem('details');

    if (!logindata) {
      showToast('No data found in localstorage', 'danger', 3000);
      
      console.log('no data found');
    return;
    }

    const storedDetails = JSON.parse(logindata);

    const matchingUser = storedDetails.find((obj) => {
      return obj.email === email && obj.password === password
    }
    );


    if (matchingUser) {
      showToast('Login Successfully','success',3000);
      showToast(`Welcome Back ${matchingUser.name}`, 'success', 3000);
      localStorage.setItem('loginData',JSON.stringify(matchingUser));
    
      navigate('/home')
    } else {
      showToast('Invalid Email ID and Password', 'warning', 3000);
    }
  };
  
  
    const handleUpdatePassword = () => {
      const logindata = localStorage.getItem('details');
  
      if (!logindata) {
        showToast('No data found in localstorage', 'warning', 3000);
        return;
      }
  
      const storedDetails = JSON.parse(logindata);
      const userIndex = storedDetails.findIndex((obj) => {
        return obj.email === email;
      });
  
      if (userIndex !== -1) {
        storedDetails[userIndex].password = newPassword;
        localStorage.setItem('details', JSON.stringify(storedDetails));
        showToast('Password update successfully', 'success', 3000);
      } else {
        showToast('User not found', 'warning', 3000);
      }
  
      setShowUpdatePassword(false)
    }


    
    return(
     
              
        <div className='Login'>
      
         <form >
            <h1>Login</h1>
         <div className='form-group'>
              <label>Email</label>
              <input
          
              className="form-control"
              placeholder='Enter Email'
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           
              /></div>
              
              <div className='form-group'>
              <label>Password</label>
              <input
           
              className="form-control"
              placeholder='Enter Password'
              required
              type="password"
              value={password}
             
            
             onChange={(e) => setPassword(e.target.value)}


              /></div>
       <button  onClick={handleLogin} type="submit" value="submit" className="button btn btn-dark btn-lg  btn-lg btn-block" >Login</button>

<br/>

             
           
               
                
                {showUpdatePassword ? (
              
                <div className='form-group'>
              <label>New Password</label>
              <input
           
              className="form-control"
              placeholder='Enter NewPassword'
              required
              type="password"
              value={newPassword}
             
            
             onChange={(e) => setNewPassword(e.target.value)}
 

              />
              
             
              
              
                <button onClick={handleUpdatePassword} className='"text-right button btn btn-dark  btn-lg btn-block" update-btn mt-3 '>Update </button>
              </div>
            ) : (
              <span 
              style={{cursor : "pointer", /*color:"blue"*/}}
               onClick={() => setShowUpdatePassword(true)}
                className="forgot-password text-left" >Forgot password?</span>
            )}<br/>
                  
                
                <h2 class="text-center">Or Login Using</h2>
          <div class="d-flex justify-content-center">
              <a href="https://accounts.google.com/"><img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" class="logo mx-2"/></a>
              <a href="https://www.facebook.com/"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" class="logo mx-2"/></a>
              <a href="https://twitter.com/i/flow/login?lang=en"><img src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp" class="logo mx-2"/></a> 
          </div>
         
            
              </form>
    
      </div>
    );
    
}

export default Login









/* /*<div className='col-md-6 mx-auto col-lg-6 col- col-sm ju' >*/
                /*<div className="input-box  mt-3">
                  <input
                    type="password"
                    value={newPassword}
                    
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <span >New Password</span>
                </div>*/
                