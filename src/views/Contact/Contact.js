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
                    <p className="contact_p"><strong>Company Name:</strong> Your Company Name</p>
                    <p className="contact_p"><strong>Address:</strong> Your Physical Address</p>
                    <p className="contact_p"><strong>Phone:</strong> Your Phone Number</p>
                    <p className="contact_p"><strong>Email:</strong> Your Email Address</p>
                    </div>
                 </div>
                

            </div>

            <Footer />
        </div>

    )

}

export default Contact
