import React from 'react';
import '../styles/Contact.css'; 
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
<div id="contact" className='contact-container'>
  <div className='contact-left'>
    <h2 className='contact-heading'>Get in Touch! Contact-Us</h2>  
    <p className='contact-text'>
      If you&apos;re interested in collaborating, have a project in mind, or want to learn more about my work, I&apos;d love to hear from you! Fill out the contact form, and I&apos;ll respond as soon as possible. Let’s connect and bring your ideas to life!
    </p>
    
    <div className='contact-info'>
      <HiOutlineMail size={30} />
      <a href="mailto:mar6736y@gmail.com">Maryam&apos;s gmail.com</a>
    </div>
    
    <div className='contact-info'>
      <FaPhoneAlt size={30} />
      03177976736
    </div>
    
    <div className='contact-info'>
      <FaLinkedin size={30} />
      <a target='_blank' href="https://www.linkedin.com/in/maryam-abbas-5a4729304/">My LinkedIn</a>
    </div>
    
    <div className='contact-info'>
      <FaGithub size={30} />
      <a target='_blank' href="https://github.com/MaryamAbbas0">My Github</a>
    </div>
  </div>

  <div className='contact-right'>
    <div className='flex flex-col gap-1 text-[#00cfff]'>
      <label htmlFor="name">Name</label>
      <input type="text" className='contact-input' id="name" />
    </div>

    <div className='flex flex-col gap-1 text-[#00cfff]'>
      <label htmlFor="email">Email</label>
      <input type="email" className='contact-input' id="email" />
    </div>

    <div className='flex flex-col gap-1 text-[#00cfff]'>
      <label htmlFor="message">Message</label>
      <textarea className='contact-textarea' id="message" rows={8}></textarea>
    </div>
    
    <button className='contact-button'>Send</button>
  </div>
</div>
  );
};

export default Contact;
