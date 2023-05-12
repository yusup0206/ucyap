import React from 'react';

import ContactImg from '../../assets/images/contact.jpg';
import Shape2 from '../../assets/images/shape2.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-card">
            <form action="" className="contact-form">
              <h3>Say Hi!</h3>
              <p>We'd like to talk with you.</p>

              <div className="input-group">
                <label htmlFor="">My name is</label>
                <input type="text" placeholder="Full name" />
              </div>
              <div className="input-group">
                <label htmlFor="">My email is</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <label htmlFor="">Your message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="I want to say thay..."
                ></textarea>
              </div>
              <button>Send message</button>
            </form>
            <div className="contact-info">
              <div className="bg-img">
                <img src={ContactImg} alt="" />
              </div>
              <div className="shape">{/* <img src={Shape2} alt="" /> */}</div>
              <div className="contact-info-text">
                <h3>Contact In formation</h3>
                <p>
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
                <a href="#">
                  <FaPhoneAlt />
                  (+40) 772 100 200
                </a>
                <a href="#">
                  <FaEnvelope />
                  hello@indium-technology.com
                </a>
                <a href="#">
                  <FaMapMarkerAlt />
                  Deák Ferenc utca 23.2.emelet, Budapest, 1052,HU
                </a>
                <div className="social-links">
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
