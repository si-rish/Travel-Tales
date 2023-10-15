import React from "react";
import "./MainHome.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
function MainHome(){
    const navigate = useNavigate();
  
    const signing=() =>{
   navigate('/signup')}
 
    return(

      
    <>
    <div className="backgroundimage">
     
        
          

           
                    <button onClick={signing} className="middle btn btn-warning   btn-lg btn-block  "
                   
                    >Sign up</button></div>


<div className="mt-5 mx-5  mb-4 " >
<h1>Why Tours and Travel</h1></div><br/>
<div className="benefits mt-3 mb-5">



</div>   
                  
                    <br/>
                    <div>
                    <Footer/>
                    </div>
                    </>
    );
}

export default MainHome;