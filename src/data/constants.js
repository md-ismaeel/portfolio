import hospitalImg from "../images/ProjectImages/hospital.png";
import pokdexImg from "../images/ProjectImages/pokedex.png";
import netflixImg from "../images/ProjectImages/Netflix.png";
import moviesImg from "../images/ProjectImages/Screenshot 2024-05-08 091630.png";
import textUtilsImg from "../images/ProjectImages/textUtils.png";
import employeesImg from "../images/ProjectImages/employees-card.png";
import stikeyNotesImg from "../images/ProjectImages/Stickey-notes.png";
import weatherApiImg from "../images/ProjectImages/Weather-api.png";
import emojeeImg from "../images/ProjectImages/emojee-app.png";
import manuuImg from "../images/maulanaazadurduuniversity.png";
import bitsImg from "../images/bits.jpeg";
import highImg from "../images/1600w-51hP1HSxAgw.webp";

export const Bio = {
  name: "Md Ismaeel",
  roles: ["Full Stack Developer", "Front End Developer", "Programmer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/md-ismaeel",
  resume:
    "https://drive.google.com/file/d/10iJcTQrW55jYtTQM_l1gYlf7WOarEiF1/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/md-ismaeel/",
  twitter: "https://x.com/impossible_br03",
  insta: "https://www.instagram.com/ismail_15_/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Typescript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
      },
      {
        name: "Redux Toolkit",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },

      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png",
      },
      {
        name: "GitHub",
        image:
          "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "Vercel",
        image:
          "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      },
      {
        name: "Figma",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
    role: "DevOps & Fullstack Engineering Intern",
    company: "Flipr Inovations Pvt. Ltd.",
    date: "Aug 2023 - July 2023",
    desc: "Working on Flipr Platforms, managing DevOps, and streamlining the process with automation.",
    skills: [
      "Docker",
      "Terraform",
      "AWS",
      "EC2",
      "Portainer",
      "Nginx",
      "JavaScript",
      "TypeScript",
      "Node Js",
      " Next Js",
    ],
    doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
  },
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
    role: "Frontend Engineer Intern",
    company: "Neurobit",
    date: "June 2023 - Present",
    desc: "Working on the frontend of the web application using ReactJS, Redux, and Material UI.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
    role: "Fullstack Externship",
    company: "Flipr",
    date: "June 2023 - July 2023",
    desc: "Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
    role: "Open Source Contributor ",
    company: "GirlScript Summer of Code",
    date: "May 2023 - Present",
    desc: "Contributing to different open-source projects and learn from industry experts",
    doc: "https://media.licdn.com/dms/image/D4D22AQGzSpgFaR4hsQ/feedshare-shrink_800/0/1684079632872?e=1687996800&v=beta&t=i0xWn_k32Oj9SxKfc6rARSbOghXD9Ge6WyEb2p2vvrc",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
    role: "Android Developer",
    company: "DSC KIIT",
    date: "Nov2021 - Present",
    desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
    skills: [
      "Leadership",
      "Mobile Application Development",
      "Kotlin",
      "XML",
      "Figma",
    ],
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Rudraksha.jpeg?alt=media&token=8f83f41e-d0a1-486f-9c7f-dd4cd1d09e8d",
    role: "Android Developer Intern",
    company: "Rudraksha Welffare Foundation",
    date: "June 2021 - Oct 2021",
    desc: "As an Android Developer Intern at Rudraksha Welfare Foundation from June 2021 to October 2021, I gained valuable hands-on experience in application development. During my tenure, I contributed to the development of the application's back-end cloud functions using Firebase and implemented a front-end with the MVVM structure, which was designed using Figma. I also added a one-to-one video call feature, conceptualized new features, and optimized app performance. This internship helped me enhance my skills in Android development and gave me an opportunity to work in a collaborative team environment.",
    skills: [
      "Android",
      "Java",
      "Kotlin",
      "XML",
      "Node Js",
      "Cloud Firestore",
      "Firebase",
      "Figma",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },
];

export const education = [
  {
    id: 0,
    img: bitsImg,
    school: "Bits Bhopal",
    date: "july 2020 - july 2023",
    grade: "8.21 CGPA",
    desc: "I completed my Bachelor's degree in Electronics and Communication Enginnering at Bhopal Institute of Technology and Science.",
    degree: "B.Tech - (Bachelor of Technology), Electronic and Communicaton Engineering.",
  },
  {
    id: 1,
    img: manuuImg,
    school: "Maulana Azad National Urdu University",
    date: "Apr 2017 - Apr 2020",
    grade: "8.25 CGPA%",
    desc: "I completed my diploma education at Manuu, Hyderabad, where I studied Electronics and Communication Engineering.",
    degree: "Diploma - (Polytechnic), Electronics and Communication Engineering.",
  },
  {
    id: 2,
    img: highImg,
    school: "S.L.N.M. +2 High School",
    date: "july 2016 - july 2017",
    grade: "62.00%",
    desc: "I completed my class 10 education at S.L.N.M. +2 High School, Chorout, where I studied Science.",
    degree: "BSEB(X), with Science.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Hostital management",
    date: "30-Aug 2023",
    description:
      "Developed a full-stack web application hospital management system that streamlines key hospital operations such as patient management, doctor scheduling, appointment booking, billing, and reporting. Built with a modern tech stack, it ensures an intuitive and efficient experience for hospital staff and patients.",
    image: hospitalImg,
    tags: [
      "HTML",
      "Tailwind Css",
      "React Js",
      "Redux Toolkit",
      "Axios",
      "Node Js",
      "Express Js",
      "MongoDb",
    ],
    category: "full stack",
    github: "https://github.com/md-ismaeel/hospital_manageMent_fullStack",
    webapp: "https://hospital-management-pearl-alpha.vercel.app",
    // member: [
    //   {
    //     name: "Rishav Chanda",
    //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //     linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //     github: "https://github.com/rishavchanda/",
    //   },
    //   {
    //     name: "Upasana Chaudhuri",
    //     img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //     linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //     github: "https://github.com/upasana0710",
    //   },
    // ],
  },
  {
    id: 1,
    title: "Netflix",
    date: "3rd-July 2023",
    description:
      "_ A web application built with ReactJS, ExpressJs and MongoDb only Authenticated user can access the movies.",
    image: netflixImg,
    tags: [
      "HTML",
      "Tailwind Css",
      "React Js",
      "Redux Toolkit",
      "Axios",
      "Node Js",
      "Express Js",
      "MongoDb",
    ],
    category: "full stack",
    github: "https://github.com/md-ismaeel/netflix_fullStack",
    webapp: "https://netflix-full-stack-smoky.vercel.app/",
  },
  {
    id: 2,
    title: "Pokédex",
    date: "3rd-Sep 2023",
    description:
      "_ A web application built with ReactJS, ExpressJs and MongoDb only Authenticated user can see pokem detail and can search by name and can wishList as well.",
    image: pokdexImg,
    tags: [
      "HTML",
      "Tailwind Css",
      "React Js",
      "Redux Toolkit",
      "Node Js",
      "Express Js",
      "MongoDb",
    ],
    category: "full stack",
    github: "https://github.com/md-ismaeel/Flurn_react_pokedex",
    webapp: "https://flurnpokedexreact.netlify.app",
  },
  {
    id: 3,
    title: "Movie App",
    date: "17-Apr 2023",
    image: moviesImg,
    description:
      "_ A web application built with ReactJS and TailwindCSS user can search movies and tv shows by name and they can see tailer as well",
    tags: ["HTML5", "TailwindCSS", "ReactJs", "Axios"],
    category: "react js",
    github: "https://github.com/md-ismaeel/movix-app",
    webapp: "https://movix-app-wheat.vercel.app",
    // member: [
    //   {
    //     name: "Rishav Chanda",
    //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //     linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //     github: "https://github.com/rishavchanda/",
    //   },
    //   {
    //     name: "Upasana Chaudhuri",
    //     img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //     linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //     github: "https://github.com/upasana0710",
    //   },
    // ],
  },
  {
    id: 4,
    title: "TextUtils",
    date: "28-March 2023",
    description:
      "_ A web application built with ReactJS and TailwindCSS for converting text upper to lover and them change.",
    image: textUtilsImg,
    tags: ["HTML5", "TailwindCSS", "ReactJs"],
    category: "react js",
    github: "https://github.com/Md-ismaeel/textUtill-react",
    webapp: "https://text-utill-react.vercel.app/",
  },
  {
    id: 5,
    title: "Employee app",
    date: "22-March 2023",
    description:
      "_ A ReactJS  application for Adding and Updating Employees Data.",
    image: employeesImg,
    tags: ["HTML5", "TailwindCSS", "ReactJs"],
    category: "react js",
    github: "https://github.com/rishavchanda/Job-finder-App",
    webapp: "https://github.com/rishavchanda/Job-finder-App",
  },
  {
    id: 6,
    title: "Weather App",
    date: "21-Feb 2023",
    description:
      "_ A web application built with HTML5, CSS3, JavaScript to show the weather data.",
    image: weatherApiImg,
    tags: ["HTML5", "Css", "JavaScript", "Api"],
    category: "javaScript",
    github: "https://github.com/Md-ismaeel/weatherApi",
    webapp: "https://md-ismaeel.github.io/weatherApi",
  },
  {
    id: 7,
    title: "Stickey Notes",
    date: "15-Jan 2023",
    description:
      "_ An application built with HTML5, Css, and JavaScript for creating and managing sticky notes.",
    image: stikeyNotesImg,
    tags: ["HTML5", "Css", "JavaScript"],
    category: "javaScript",
    github: "https://github.com/Md-ismaeel/StickeyNotesProjects_js",
    webapp: "https://md-ismaeel.github.io/StickeyNotesProjects_js/",
  },
  {
    id: 8,
    title: "Emojee app",
    date: "17-Jan 2023",
    description:
      "_ A web application developed using Html Css and javaScript to show the emojees from Api.",
    image: emojeeImg,
    tags: ["HTML5", "Css", "JavaScript"],
    category: "javaScript",
    github: "https://github.com/md-ismaeel/EmojiProject_js",
    webapp: "https://md-ismaeel.github.io/EmojiProject_js",
  },
];

// export const TimeLineData = [
//   { year: 2017, text: "Started my journey" },
//   { year: 2018, text: "Worked as a freelance developer" },
//   { year: 2019, text: "Founded JavaScript Mastery" },
//   { year: 2020, text: "Shared my projects with the world" },
//   { year: 2021, text: "Started my own platform" },
// ];
