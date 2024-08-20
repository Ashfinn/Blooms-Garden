import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Garden Planning</a>
        <a className="link link-hover">Flower Delivery</a>
        <a className="link link-hover">Consultation</a>
        <a className="link link-hover">Maintenance</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
