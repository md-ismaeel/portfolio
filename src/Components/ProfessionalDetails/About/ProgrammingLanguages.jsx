import React from "react";
// import ""
import "../About/ProgrammingLanguage.css"

const ProgrammingLanguages = () => {

  const programmingLanguage = [
    { name: "HTML", proficiency: "95%" },
    { name: "CSS", proficiency: "90%" },
    { name: "JavaScript", proficiency: "80%" },
    { name: "Java", proficiency: "70%" },
    { name: "Tailwind CSS", proficiency: "50%" },
    { name: "Figma", proficiency: "70%" },
    { name: "React", proficiency: "70%" },
  ];

  const humanLanguage = [
    { name: "Hindi", proficiency: "95%" },
    { name: "English", proficiency: "75%" },
    { name: "Urdu", proficiency: "80%" },
    { name: "Telugu", proficiency: "30%" },
  ];

  return (
    <>
      <div className="programming-lang-box">
        <div className="coding-lang">

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'white', margin: '1rem' }}>Coding Languages</h3>
          </div>

          <div style={{ width: "100%", display: 'flex', gap: '1rem', flexDirection: 'column', padding: '20px' }}>

            {programmingLanguage.map((items, index) => {
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', color: 'white', gap: '5px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <h4>{items.name}</h4>
                    <span style={{ opacity: '0.8' }}>{items.proficiency}</span>
                  </div>

                  <div style={{ width: '100%', backgroundColor: '#383838', height: '8px', borderRadius: '10px' }}>
                    <p style={{ width: items.proficiency, height: '100%', backgroundColor: '#FFC461', borderRadius: '10px' }}></p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        <div className="human-lang">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'white', margin: '1rem' }}>Human Languages</h3>
          </div>
          <div style={{ width: "100%", display: 'flex', gap: '1rem', flexDirection: 'column', padding: '20px' }}>
            {humanLanguage.map((items, index) => {
              return (

                <div key={index} style={{ display: 'flex', flexDirection: 'column', color: 'white', gap: '5px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <h4>{items.name}</h4>
                    <span style={{ opacity: '0.8' }}>{items.proficiency}</span>
                  </div>

                  <div style={{ width: '100%', backgroundColor: '#383838', height: '8px', borderRadius: '10px' }}>
                    <p style={{ width: items.proficiency, height: '100%', backgroundColor: '#FFC461', borderRadius: '10px' }}></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </>
  );
};

export default ProgrammingLanguages;
