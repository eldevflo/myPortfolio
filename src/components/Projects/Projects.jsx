import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project , index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
      <div  style={{textAlign: 'center' , marginTop: '20px'}}>
      <a 
        href="/https://github.com/fzmnpr"
        target="_blank"
        style={{textDecoration : 'underline'}}>
        to see all my projects , you can visit my gitHub 
      </a>
      </div>
    </section>
  )
}

export default Projects
