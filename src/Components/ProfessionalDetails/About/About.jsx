import React, { useState } from "react";
import "../../ProfessionalDetails/About/About.css";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Navbar from "../../Navbar/Navbar";
import Skills from "./Skills";

export const About = () => {

    const [showMore, setShowMore] = useState(false);
    const onClickHandler = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="about-container">
            <Navbar />
            <div>
                <h1 className="heading-name">About Me</h1>
            </div>

            <div className="about-me">
                <p className="about-me-text">
                    Hello there! 👋 My name is ismail and I'm from India. As a
                    Full-Stack software developer, I specialize in creating visually
                    appealing websites, apps and mobile games. My passion for development isn't just a hobby, it's a key ingredient in every project I
                    work on.
                </p>
                {showMore ? (
                    <>
                        <div className="hidden-text">
                            <p>
                                Growing up bilingual, I developed a love for languages and I
                                currently speak four of them fluently. I believe that this skill
                                has given me a unique perspective and allows me to communicate
                                effectively with clients from all over the world. One of my
                                strengths is adding a personal touch to my projects by adding
                                the client's identity and message into the design, creating
                                meaningful and beautiful end products that are both eye-catching
                                and user-friendly.
                            </p>
                            <p>
                                In my free time, I enjoy exploring my other passions, such as
                                photography and music production, which provide me with creative
                                outlets. I am also very passionate about Web3 and everything
                                related to crypto, NFTs and blockchain technology as I believe
                                they have the potential to revolutionize business and online
                                interactions.
                            </p>
                            <p>
                                If you have an innovative idea for a project that needs to be
                                developed, I would love to hear from you. Your vision can be
                                turned into a real product. Don't hesitate to reach out and
                                let's start a conversation about your concept. I'm excited to
                                collaborate and help bring your ideas to life.
                            </p>
                        </div>
                        <button className="show-more-btn" onClick={onClickHandler}>
                            ↑  Show Less  ↑
                        </button>
                    </>
                ) : (
                    <button className="show-more-btn" onClick={onClickHandler}>
                        ↓  Show More  ↓
                    </button>
                )}
            </div>

            <div className="exploring-creativity">
                <div style={{ textAlign: 'center', color: 'white', marginBottom:'2rem'}}>
                    <h2>Exploring creativity</h2>
                </div>
                <div className="explore-box">

                    <div className="box-1">
                        <img src="https://oktayshakirov.com/assets/images/icon-video.svg" alt="video-icon" width={"50px"} height={"50"} />
                        <div className="exp-para">
                            <h3>Visual Storytelling</h3>
                            <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
                        </div>
                    </div>

                    <div className="box-1">
                        <img src="https://oktayshakirov.com/assets/images/icon-multimedia.svg" alt="multimedia-icon" width={"50px"} height={"50"} />
                        <div className="exp-para">
                            <h3>Digital Content Creation</h3>
                            <p>Creating dynamic digital content, such as 3D models, graphics animations.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="lang">Languages</h2>
            </div>

            <div className="language-box">
                <ProgrammingLanguages />
            </div>

            <div>
                <h2 style={{ textAlign: 'center', margin: '1rem', color: 'white' }}>Development Skills</h2>
            </div>
            <div className="development-skills">
                <Skills />
            </div>


        </div>
    );
};
