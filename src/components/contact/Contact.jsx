import React from "react";
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef ();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendFrom('service_3fjfb17','template_', form.current, 'YOUR_USE_ID')
            
        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>mhmdzamzam414@gmail.com</h5>
                        <a href="mailto:mhmdzamzam414@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Dirrect Message</h4>
                        <h5>al.rsydmhmd_</h5>
                        <a href="mailto:mhmdzamzam414@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+6285891185843</h5>
                        <a href="https://api.whatsapp.com/send?phone=+62858911185843" target="_blank">Send a Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message"></textarea>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact