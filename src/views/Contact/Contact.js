import React from "react"
import "./Contact.css"
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';

function Contact() {
    return (
        <div>
            <Navbar />
            <section className="contact">
                <div className="content">
                    <h1>Contact Us</h1>
                    <p>We would love to hear from you. Please use the form below to send us a comment or ask a question. We will reply as soon as possible.</p>

                </div>
                <div className="container">
                    <div className="contactInfo">
                    <div className="box">
                            <div className="icon"></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>Plot No.50, Central Complex, Mount Road, 874974 </p>
                            </div>
                        </div>
                      
                        <div className="box">
                            <div className="icon"></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>507-867-888 </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>TravelsTales@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form>
                            <h2>send message</h2>
                            <div className="inputBox">
                                <input type="text" name="" required=""></input>
                                <h2>Full Name</h2>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required=""></input>
                                <h2>Email</h2>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required=""></input>
                                <h2>Type your Message...</h2>
                            </div>
                            <div className="inputBox">
                                <input type="submit" name="" vlaue="send"></input>

                            </div>
                        </form>


                    </div>

                </div>

            </section>

            <Footer />
        </div>
    )

}
export default Contact
