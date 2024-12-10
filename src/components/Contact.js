import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <section id="contactPg">
            <div className="headerBlock">
                <div className="container">
                    <h2>── .✦Contact Me✦. ──</h2>

                    <div className="sideBySide">
                        <div className="seperateInfoLeft">
                            <h3>Phone Number: </h3> 
                            <p>+1 (626) 755-8760</p>
                        </div>

                        <div className="seperateInfoRight">
                            <h3>Email Address:</h3>
                            <p>malenalodi3@gmail.com</p>
                        </div>
                    </div>
                    
                    <h3>Linkedin: </h3> 
                    <a href="https://www.linkedin.com/in/malena-lodi-07a0aa251/" target="_blank">Click Here</a>
                    

                </div>
            </div>
        </section>



    );
};

export default Contact
