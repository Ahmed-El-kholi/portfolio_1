import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_enzfzwn', 'template_bbh5sqo', form.current, 'KlOfnmxr1y_23n20f')
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>aelkholy099@gmail.com</h5>
                        <a href='mailto:aelkholy099@gmail.com' rel="noreferrer" target='_blank'>Send A Message</a>
                    </article>
                    <article className='contact_option'>
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messanger</h4>
                        <h5>Ahmed Elkholi</h5>
                        <a href='https://m.me/ahmedelkholi' rel="noreferrer" target='_blank'>Send A Message</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+201016013903</h5>
                        <a href='https://api.whatsapp.com/send?phone=+01016013903' rel="noreferrer" target='_blank' >Send A Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder=' your Full Name' required />
                    <input type='email' name='email' placeholder=' your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact