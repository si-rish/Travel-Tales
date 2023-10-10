import React from 'react';
import "./Footer.css"
import fb from "./../Image/facebook.png";
import twitter from "./../Image/twitter.png";
import linkedin from "./../Image/linkedin.png";
import insta from "./../Image/instagram.png";
export default function Footer() {

    return (
        <div className="footer">
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>In the Main Section </h4>
                        <a href=" ">
                            <p>Home</p>
                        </a>
                        <a href=" ">
                            <p>About Us</p>
                        </a>
                        <a href=" ">
                            <p>latest News & Blog </p>
                        </a>
                        <a href=" ">
                            <p>Contact Us</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Company</h4>
                        <a href="/RTC">
                            <p>About Us</p>
                        </a>
                        <a href="/RTC">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="/RTC">
                            <p>Copyright Ploicies</p>
                        </a>
                        <a href="/RTC">
                            <p>Support</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>LEGAL POLICIES</h4>
                        <a href=" ">
                            <p>Terms & Conditions</p>
                        </a>
                        <a href=" ">
                            <p>Disclaimer</p>
                        </a>
                        <a href=" ">
                            <p>Privacy Policy</p>
                        </a>
                        <a href=" ">
                            <p>Share Your Travel Experience</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Follow us</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" ></img></p>
                            <p><img src={twitter} alt="" ></img></p>
                            <p><img src={linkedin} alt="" ></img></p>
                            <p><img src={insta} alt="" ></img></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


