import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio'
import profile from './../../assets/profile.png'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  return (
    <div className='about center'>
       
      <img src={profile} width={250} className="profile-photo" />
      
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}
      
      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact'>
        <div>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
              >
                <GitHubIcon fontSize="large"/>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            )}
          </>
        )}
        </div>
      </div>
    </div>
  )
}

export default About
