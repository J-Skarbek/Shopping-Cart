import React from "react";
import reactLogo from '../assets/react.svg';
import panda from '../assets/panda-logo.svg';
import meta from '../assets/meta.svg';
import tikTok from '../assets/tik-tok.svg';
import instagram from '../assets/instagram.svg';


function Footer() {

  return (
    <div className="footer flex bg-slate-100 items-end py-4 mt-4">
       <div className="left-col px-16">
        <img className="logo-img w-1/6 my-4" src={panda} alt="logo" />
        <h2>PANDA</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="middle-col px-16">
        <p>
          This site was created as a personal project, and all images were pulled 
          from very talented photographers found on <a href="#">FashionEditorals.com</a>. 
          I claim no ownership of any images nor is this site used in any commercial 
          purpose.
        </p>
      </div>
      <div className="right-col px-16">
        <div className="social-media-links flex">
          <img className="ig-logo w-6 mx-1" src={instagram} alt="Our Instagram" />
          <img className="tiktok-logo w-6 mx-1" src={tikTok} alt="Our Tik Tok" />
          <img className="meta-logo w-6 mx-1" src={meta} alt="Our Facebook" />
        </div>
        <div className="copyright">
          <p>Copyright Panda 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;