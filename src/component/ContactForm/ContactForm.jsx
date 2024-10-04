import React, { useState } from 'react';
import axios from 'axios';
import icon1 from "../img/iconc-1.png"
import icon2 from "../img/iconc-2.png"
import icon3 from "../img/iconc-3.png"
import { Link } from 'react-router-dom';
import '../ContactForm/ContactForm.css'
export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
    // Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = '5fe64383-22c0-4cf8-b10f-602c30089a6f';

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Send data to Web3Forms
    axios
      .post('https://api.web3forms.com/submit', {
        access_key: WEB3FORMS_ACCESS_KEY,
        ...formData,
      })
      .then((response) => {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        setErrorMessage('Oops! Something went wrong, please try again.');
        setIsSubmitting(false);
      });
  };
  return (
    <>
    <section>
    <section className="hero-section">
  <a href="#about" className="banner-icon">
    <i className="flaticon-down-arrow" />
  </a>
  <div className="container">
    <div className="hero-content">
      <h1 className="title" data-bg="Contact">
        <span>Contact with me</span>
      </h1>
      <ul className="breadcrumb">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </div>
  </div>
</section>

    </section>

    <>
  {/* === Contact Section === */}
  <div className="contact-info-section padding-top padding-bottom py-5" id="about">
    <div className="container">
      <div className="row mb-30-none justify-content-center">
      <div className="col-lg-4 col-md-6">
          <div className="contact-info-item">
            <div className="contact-info-thumb">
              <img src={icon2} alt="contact" />
            </div>
            <div className="contact-info-content">
              <h6 className="title">Phone</h6>
              <ul>
                <li>
                0000 - 8888 - 666
                </li>
                <li>
                0000 - 9999 - 333
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-item">
            <div className="contact-info-thumb">
              <img src={icon1} alt="contact" />
            </div>
            <div className="contact-info-content">
              <h6 className="title mx-4">Address</h6>
              <ul>
                <li>
                Italia
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-item ">
            <div className="contact-info-thumb">
            <img src={icon3} alt="contact" />
            </div>
            <div className="contact-info-content">
              <h6 className="title">Email</h6>
              <ul>
                <li>
                <Link to="/">
                   <span
                      className="__cf_email__"
                      data-cfemail="583c3d353734313633183f35393134763b3735"
                    >
                      [email&nbsp;protected]
                    </span>
                   </Link>
                </li>
                <li>
                  <Link>
                  <span
                      className="__cf_email__"
                      data-cfemail="40342538342c292e2500272d21292c6e232f2d"
                    >
                      [email&nbsp;protected]
                    </span>

                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>




    {/*  */}
    <section className='container'>
    <div >
    <div className="section-header margin-olpo position-relative">
                <h2 className="title ">
                    <span className="shape"><span className='abo'>With </span></span> <span>Me</span>
                </h2>
            </div>

      {/* Success or error message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <div className='contact-form-group'>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            name="name"
            placeholder='full name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            name="email"
            placeholder='Email'

            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder='Message'

            required
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className='custom-button  my-5' style={{backgroundColor:"transparent"}}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
    </section>
   
    
    </>
  )
}
