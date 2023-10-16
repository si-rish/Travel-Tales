import React from "react";
import "./MainHome.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";


function MainHome(){
    const navigate = useNavigate();
  
    const signing=() =>{
   navigate('/signup')}
 

   const explore=() =>{
    navigate('/destination')
   }
    return(

      
    <>


      




  <div className="backgroundimage">

    <iframe width="100%" height="500px" 
    src="https://www.youtube.com/embed/_KCzjzyrbyQ?si=uH14nqdgd6yI9_pD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>
 </div><br/><br/>
 <h1>FOR MORE</h1>
 <div className="middle">
      <button onClick={signing} className="s btn btn-warning   btn-lg btn-block" >Sign up</button>
   
      <button onClick={explore} className="e btn btn-warning   btn-lg btn-block" >Explore</button>
   </div>


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