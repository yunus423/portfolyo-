import React from 'react'
import '../../components/contact/contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_n0nk907', 'template_5zaog8a', form.current, '9Uw2fEiP5wwIYMuiu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
   <div className='contact-left'>
    <div className='w-left'>
        <span>Get in touch</span>
        <span> Contact me</span>
        <div   className="blur t-blur1"
          style={{ background: "#ABF1FF94" }}>

          </div>
    </div>

   </div>
    <div className='c-right' >
   <form ref={form} onSubmit={sendEmail}>
    <input placeholder='name' type='text' className='user' name='user_name' />
    <input placeholder='Email' type='text' className='user' name='user_email' />
    <textarea className='user' name='message' placeholder='message'></textarea>
    <input className='button' name='send' type='submit'/>
    <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
   </form>
    </div>
    </>
   )
}

export default Contact