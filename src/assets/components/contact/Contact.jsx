import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com'
const contactData = [
  {
    id: 1,
    logo: AiOutlineMail,
    name: "Email",
    data: "pradumkumardubey@gmail.com",
    datalink:"mailto:pradumkumardubey@gmail"
  },
  {
    id: 2,
    logo: FiTwitter,
    name: "Twitter",
    data: "@PradumKumardub1",
    datalink:"https://www.twitter.com/intent/tweet?screen_name=Pradum12613076"
  },
  {
    id: 3,
    logo: BsWhatsapp,
    name: "WhatsApp",
    data: "+91 8318661938",
    datalink:"https://wa.me/918318661938"
  }
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ix9hvk', 'template_bid360b', form.current, 'YxeoYNZzXmlUvA4Es')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
        {contactData.map((allCard) => 
          <article className="contact_option">
            <allCard.logo className='contact_option_icon' />
            <h4>{allCard.name}</h4>
            <h5>{allCard.data}</h5>
            <a href={allCard.datalink} target="_blank" rel="noreferrer">Send a message</a>
          </article>
        )}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="text" name='mobile' placeholder='Your Mobile no.' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
