import React from "react"
import "./Contact.css"
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { useState } from "react";
import showToast from 'crunchy-toast'
import fb from "./../../components/Image/facebook.png"


function Contact() {
    const [contacts, setContacts] = useState([

    ]);

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const Submit = () => {
        const obj = {
            name: name,
            mobile: mobile,
            email: email,
            message: message,

        }

        setContacts([...contacts, obj]);

        showToast('Message Sent Successfully', 'success', 5000);

        setName('');
        setMobile('');
        setEmail('');
        setMessage('')

    };

    return (
        <div >
            <Navbar />
            <div className="header_contact-main-img">

              <h1 className="fade-in-bottom contact-with-us">Contact With Us</h1>
            </div>

            <div  className="contact_heading ">
                <h1>LET'S GET IN TOUCH!</h1>
                <p>If you're looking for a real tour place, colourful experience,
                    India tour packages are perfect. Get an unforgettable
                    experience with our India tour packages.</p>
                    <p>We can help. Our Team of experts is on hand to answer your question</p>
                <form>

                    <div className="Contact-card">
                        <h1>✉️ Contact for Enquiry Here... </h1>
                        <input
                            type="text"
                            name="name"
                            id=""
                            placeholder="Enter Name"
                            className='form_input-box'
                            onChange={(e) => {
                                setName(e.target.value)
                                console.log(e.target.value)
                            }}
                            value={name}
                        />

                        <input
                            type="phone"
                            name="phone"
                            id=""
                            placeholder="+91"
                            className='form_input-box'
                            onChange={(e) => {
                                setMobile(e.target.value)
                                console.log(e.target.value)
                            }}
                            value={mobile}
                        />

                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="example@gmail.com"

                            className='form_input-box'
                            onChange={(e) => {
                                setEmail(e.target.value)
                                console.log(e.target.value)
                            }}
                            value={email}
                        />
                        <input
                            type="message"
                            name="message" id=""
                            onChange={(e) => {
                                setMessage(e.target.value)
                                console.log(e.target.value)
                            }}
                            value={message}
                            placeholder="Type Here Message........"
                            className='form_input-msg-box'></input>


                        <button
                            type='button'
                            className='submit-btn'
                            onClick={Submit}>
                            Submit
                        </button>
                    </div>
                </form>

                <hr className="contact_hr"></hr>
                <div className="contact_detail_img">
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28025.63281765402!2d77.29205183359369!3d28.593653212133525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4fc6f55c475%3A0x82d3278fa613f5da!2sIndia%20Tour%20Services!5e0!3m2!1sen!2sin!4v1697204849941!5m2!1sen!2sin"
                     width="600"
                      height="400" 
                      style={{border:"0"}}
                      allowfullscreen="" 
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade"
                      className="contact_map">
                      </iframe>
                    </div>
                    <div className="contact-details-info">
                        <h1 className="contact_h1 contact-h1-line">Contact Details</h1>
                        <p className="contact_p"><strong className="contact_detail-name">Company Name: </strong>TRAVELS-TALES</p>
                        <p className="contact_p"><strong className="contact_detail-name">Address: </strong>C- 81C, Sector 65, C Block, Sector 8, Noida, Uttar Pradesh 201301</p>
                        <p className="contact_p"><strong className="contact_detail-name">Phone: </strong>+39 055 2302885</p>
                        <p className="contact_p"><strong className="contact_detail-name">Email: </strong>travels-tales@gmail.com</p>
                    </div>
                </div>


            </div>

            <Footer />
        </div>

    )

}

export default Contact
