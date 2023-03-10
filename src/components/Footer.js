import React from "react";
import PageLink from "./PageLink";
import { pageLinks, socialLinks } from "../data";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return ( 
            <PageLink {...link} className='footer-link' key={link.id}/>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink {...link} className='footer-icon' key={link.id}/>;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
