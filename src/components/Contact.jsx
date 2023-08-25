import "../Styles/Contact.css"
import contactImg from "../assets/img/contact-img1.jpg";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [buttonText, setButtonText] = useState('Send');
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
    
        setButtonText("Sending...");
    
        try {
            const result = await emailjs.sendForm('service_ggogquo', 'template_gsl28kw', form.current, 'RZfkDMwLB2LmXjf-k');
            console.log(result.text);
            form.current.reset(); // Reset the form
        } catch (error) {
            console.log(error.text);
        }
    
        setButtonText("Send");
    };
      
    return (
        <div className="contact" id="connect">
            <img src={contactImg} alt="Contact Us"/>
            <form ref={form} onSubmit={sendEmail}>
                    <h2>
                        Get In Touch
                    </h2>
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" placeholder="First Name" name="first_name" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Last Name" name="last_name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Phone No." name="phone" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group full-width">
                        <textarea placeholder="Message" name="message"></textarea>
                    </div>
                </div>
                <button type="submit">
                    <span>{buttonText}</span>
                </button>
            </form>
        </div>
    )
}