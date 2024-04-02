import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import "../Contact/Contact.css";
import githubImg from "../../../assets/ContactImages/github (1).png";
import linkedinImg from "../../../assets/ContactImages/linkedin.png";
import instagramImg from "../../../assets/ContactImages/instagram.png";
import twitterImg from "../../../assets/ContactImages/twitter.png";
import { GetInTouch } from "./GetInTouch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const socialData = [
    {
      name: "github",
      socialImg: githubImg,
      link: "https://github.com/Md-ismaeel",
    },
    {
      name: "linkedin",
      socialImg: linkedinImg,
      link: "https://www.linkedin.com/in/md-ismaeel-73b636224/",
    },
    {
      name: "instagram",
      socialImg: instagramImg,
      link: "https://www.instagram.com/ismail_15_/",
    },
    {
      name: "twit",
      socialImg: twitterImg,
      link: "https://twitter.com/impossible_br03",
    },
  ];

  const myEmail = "mdismaeelkahn345@gmail.com";
  const emailRef = useRef(null);

  const copyEmail = () => {
    // console.log("hi");
    if (emailRef.current) {
      emailRef.current.select();
      document.execCommand("copy");
      toast.success("Copied email successfully!!");
    }
  };

  return (
    <div className="contact-container">
      <Navbar />

      <div>
        <h1 className="heading-name">Contact</h1>
      </div>

      <GetInTouch />

      <div className="email-box">
        <h2 style={{ opacity: '0.9' }}>Email:-</h2>

        <div>
          <input
            className="email-input"
            ref={emailRef}
            value={myEmail}
            readOnly
          />
          <button className="copy-btn" onClick={copyEmail}>
            Copy
          </button>
        </div>

      </div>

      <div className="social">
        <h2 style={{ color: 'white', opacity: '0.9' }}>Socials</h2>
        <div className="img-div">
          {socialData.map((item, index) => {
            return (
              <a href={item.link} target="_blank" key={index}>
                <img src={item.socialImg} alt={item.name} />
              </a>
            );
          })}
        </div>
      </div>


      <ToastContainer
        position="top-center"
      />

    </div>
  );
};

export default Contact;
