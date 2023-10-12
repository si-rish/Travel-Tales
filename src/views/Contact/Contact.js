import React from "react"
import "./Contact.css"
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';

function Contact() {
    return (
        <div >
            <Navbar />
            <div className="contact-container">
            
            <form>
                <h1>Contact for Enquiry Here...</h1>
                <input type="text" name="name" id="" placeholder="Enter Name" className="form_input-box"></input>
                <input type="email" name="emial" id="" placeholder="example@gmail.com" className="form_input-box"></input>
                <input type="phone" name="phone" id="" placeholder="+91" className="form_input-box"></input>
                <input type="message" name="message" id="" placeholder="Type Here Message........" className="form_input-msg-box"></input>
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
            </div>

            <Footer />
        </div>
        
    )

}
export default Contact
