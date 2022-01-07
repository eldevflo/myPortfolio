import { skills , otherSkills } from '../../portfolio'
import './Skills.css'
import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar';
import { useEffect } from 'react';
import AnimatedProgressProvider from '../../contexts/AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';

const Skills = () => {
  useEffect(() => {

  })
  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className="main-skills">
        {
          skills.map((sk , index) =>(
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={sk.percentage}
              duration={1.4}
              easingFunction={easeQuadInOut}
            >
            {(value) =>{
              const roundedValue = Math.round(value);
              return(
              <div className="skill_progress" key={index} style={{ width: 200, height: 200 }}> 
              <CircularProgressbar 
                  value={value} 
                  text={`${roundedValue}%`}
                    styles={
                      buildStyles({
                        trail : {
                          transform: 'rotate(0.25turn)',
                          transformOrigin: 'center center',
                        },
                          strokeLinecap: 'round',
                          textSize: '12px',
                          pathTransitionDuration: 0.5,
                        // Colors
                      pathColor: '#90a0d9',
                      textColor: '#fff',
                      trailColor: '#d6d6d6',
                      backgroundColor: '#90a0d9',
                  })}

                  />
                  <p>{sk.name}</p>
              </div>
              )}}
            </AnimatedProgressProvider>
            
          ))
        }
      </div>
       <h2 className='section__title'>Other Skills</h2>
      <ul className='skills__list'>
        {otherSkills.map((skill , index) => (
          <li key={index} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
