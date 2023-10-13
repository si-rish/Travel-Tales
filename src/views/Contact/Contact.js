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


            </div>

            <div >
                <h1>LET'S GET IN TOUCH!</h1>
                <p>If you're looking for a real historical, colourful experience,
                    Rajasthan tour packages are perfect. Get an unforgettable
                    experience with our Rajasthan tour packages.</p>
                <form>

                    <div className="Contact-card">
                        <h1>Contact for Enquiry Here... </h1>
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
                    <p><img src={fb} alt="" className="contact_img"></img></p>
                    <div className="contact-details-info">
                        <h1 className="contact_h1">Contact Details</h1>
                        <p className="contact_p"><strong>Company Name:</strong>TRAVELS_TALES</p>
                        <p className="contact_p"><strong>Address:</strong>C - 81C, Sector - 8, Noida - 201308</p>
                        <p className="contact_p"><strong>Phone:</strong>+39 055 2302885</p>
                        <p className="contact_p"><strong>Email:</strong>travels-tales@gmail.com</p>
                    </div>
                </div>


            </div>

            <Footer />
        </div>

    )

}

export default Contact
