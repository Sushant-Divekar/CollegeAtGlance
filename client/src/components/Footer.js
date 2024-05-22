import React from 'react';
import { useNavigate } from 'react-router-dom';
// import email from '../Images/email.png';
import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We College At Glance, revolutionizing college selection!</p>
        </div>
        <div className="footer-section contact" >
          <h3 style={{"color": "#333", "cursor": "pointer"}} onClick={handleClick}>Contact Us</h3>
          {/* <img style={{"height": "240px"}} src={email} alt="email" /> */}
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href='/diary'>Diary</a></li>
            {/* <li><a href="/contact">Contact</a></li> */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} College At Glance.
      </div>
    </footer>
  );
};

export default Footer;
