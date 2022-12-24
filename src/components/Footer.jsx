import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright &copy; 2021</p>
      <div className="social-links">
        <a href="#"><i className="fa fa-github"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
      </div>
    </footer>
  );
}

export default Footer;