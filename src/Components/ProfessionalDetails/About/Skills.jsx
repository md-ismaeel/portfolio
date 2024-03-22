import React from 'react'
import "../About/Skills.css"
import htmlImg from "../../../assets/skillsImages/html.png"
import cssImg from "../../../assets/skillsImages/css.png"
import gitImg from "../../../assets/skillsImages/GitBlack.png"
import javaScriptImg from "../../../assets/skillsImages/java-script.png"
import javaImg from "../../../assets/skillsImages/java-x.png"
import nodeImg from "../../../assets/skillsImages/node.png"
import reactImg from "../../../assets/skillsImages/react.png"
import githubImg from "../../../assets/skillsImages/github.png"
import tailwindImg from "../../../assets/skillsImages/tailwind.png"
import npmImg from "../../../assets/skillsImages/npm.png"


console.log(githubImg);
const Skills = () => {

    const data = [
        { name: 'html', skillsImage: htmlImg },
        { name: 'css', skillsImage: cssImg },
        { name: 'tailwind', skillsImage: tailwindImg },
        { name: 'javaScript', skillsImage: javaScriptImg },
        { name: 'java', skillsImage: javaImg },
        { name: 'node', skillsImage: nodeImg },
        { name: 'npm', skillsImage: npmImg },
        { name: 'react', skillsImage: reactImg },
        { name: 'git', skillsImage: gitImg },
        { name: 'github', skillsImage: githubImg },
    ]

    return (
        <div className='div-style'>
            {data.map((items, index) => {
                return (
                    <li key={index} className='li-items'>
                        <img src={items.skillsImage} alt={items.name} width={"150px"} height={'150px'} />
                    </li>
                )
            })}
        </div>
    )
}

export default Skills;
