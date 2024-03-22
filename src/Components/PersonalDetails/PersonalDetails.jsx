import myImage from "../../assets/personalImage/ismail-img.jpg";
import "../PersonalDetails/PersonalDetails.css";
// import { FaGithub, CiLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useEffect, useState } from "react";

export const PersonalDetail = () => {
  const [age, setAge] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    if (age < 23) {
      interval = setInterval(() => {
        setAge((prev) => prev + 1);
      }, 50);
    }

    return () => clearInterval(interval);
  }, [age]);

  const text = Array.from({ length: 16 }, () =>
    Array.from({ length: 15 }, () => Math.round(Math.random())).join("")
  );
  text[text.length - 1] = "Hello World!!";

  useEffect(() => {
    let intervalId = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);

      if (text[index] === "Hello World!!") {
        // Corrected the string to match the text content
        clearInterval(intervalId);
        setIndex(text.length - 1);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text, index]);

  return (
    <>
      <div className="personal-container">
        <div className="personal-img">
          <img src={myImage} height={"200px"} width={"150px"} alt="dp-image" />
        </div>
        <div className="name-para">
          <h3> MD ISMAIL</h3>
          <p>{text[index]}</p>
          <br />
          <hr className="personal-hr" />
        </div>
        <div className="personal-detail-box">
          <div className="personal-age">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <title>Hourglass</title>
                <path d="M415.7 427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52 279 320 270.61 320 256c0-14.41 8.49-22.64 26.16-38.44 25.93-23.17 61.44-54.91 69.56-132.84a47 47 0 00-12-36.26A50.3 50.3 0 00366.39 32H145.61a50.34 50.34 0 00-37.39 16.46 47.05 47.05 0 00-11.94 36.26c8.09 77.68 43.47 109.19 69.3 132.19C183.42 232.8 192 241.09 192 256c0 15.1-8.6 23.56-26.5 39.75-25.5 23.1-60.5 54.73-69.2 131.38a46.59 46.59 0 0011.7 36.2A50.44 50.44 0 00145.61 480h220.78A50.44 50.44 0 00404 463.33a46.59 46.59 0 0011.7-36.2zM343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.22 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z"></path>
              </svg>
            </span>

            <div style={{ color: "white" }}>
              <p className="opacity-dull">AGE</p>
              <p>{age} Year Old</p>
            </div>
          </div>
          <div className="personal-location">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <title>Location</title>
                <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
              </svg>
            </span>

            <div style={{ color: "white" }}>
              <p className="opacity-dull">LOCATION</p>
              <p>Hyderabad India</p>
            </div>
          </div>
          <div className="personal-type">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <title>Person</title>
                <path d="M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z"></path>
              </svg>
            </span>

            <div style={{ color: "white" }}>
              <p className="opacity-dull">PERSONALITY TYPE</p>
              <p>INTJ-T</p>
            </div>
          </div>
        </div>

        <div className="react-icons">
          <a href="https://github.com/Md-ismaeel" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-ismaeel-73b636224/"
            target="_blank"
          >
            <CiLinkedin />
          </a>
          <a href="https://www.instagram.com/ismail_15_/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/impossible_br03" target="_blank">
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
};
