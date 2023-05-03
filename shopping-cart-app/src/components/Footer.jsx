import React from "react";
import reactLogo from '../assets/react.svg';
import meta from '../assets/meta.svg';
import tikTok from '../assets/tikTok.svg';
import instagram from '../assets/instagram.svg';

function Footer() {

  return (
    <div className="footer flex">
       <div className="left-col">
        <img className="logo-img" src={reactLogo} alt="logo" />
        <h2>Company Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="middle-col">
        <p>
          This site was created as a personal project, and all images were pulled 
          from very talented photographers found on <a href="#">FashionEditorals.com</a>. 
          I claim no ownership of any images nor is this site used in any commercial 
          purpose.
        </p>
      </div>
      <div className="right-col">
        <div className="social-media-links flex">
          <img className="ig-logo" src={instagram} alt="Our Instagram" />
          <img className="tiktok-logo" src={tikTok} alt="Our Tik Tok" />
          <img className="meta-logo" src={meta} alt="Our Facebook" />
        </div>
        <div className="copyright">
          <p>Copyright StoreName 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;