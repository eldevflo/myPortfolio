const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Dev.',
}
const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fatemeh Zamanipour',
  role: 'Front End Developer',
  profile : './assets/profile.png',
  description:
    'An ambitious problem solver with a passion for online businesses. I am thorough and precise in everything I do, and have a keen interest in technology and web applications. As someone who takes responsibility for his own personal development, I am continually evaluating and upgrading my skills so that I stay at the cutting edge of web development. I am a Front-End developer mainly focused on ReactJs.',
  social: {
    linkedin: 'https://www.linkedin.com/in/fatemeh-zamanipour-b7324ab9/',
    github: 'https://github.com/fzmnpr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'jobhunt',
    description:
      'A react web site to search for jobs, including informations about finding a perfect career and some packages to help people find their dream job',
    stack: ['tailwind css', 'React'],
    sourceCode: 'https://github.com/fzmnpr/jobhunt',

  },
  {
    name: 'pwa weather App',
    description:
      'A modern pw web Application to search for weather information all over the world',
    stack: ['javascript', 'React' , 'material-ui'],
    sourceCode: 'https://github.com/fzmnpr/Pwa-app',
    livePreview: 'https://trusting-rosalind-e9222d.netlify.app/',
  },
  {
    name: 'PWA React Dictionary',
    description:
      'A moder pw dictionary web Application to search for a word and see definitions , synonyms and pronanciation',
    stack: ['javascript', 'React' , 'sass'],
    sourceCode: 'https://github.com/fzmnpr/pwa-dictionary',
    livePreview: 'https://angry-wozniak-c91de3.netlify.app/'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    name : 'JavaScript',
    percentage : '80'
  },
  {
    name : 'React',
    percentage : '80'
  },
  {
    name : 'React-Redux',
    percentage : '90'
  },
  {
    name : 'PWA',
    percentage : '50'
  },
]
const otherSkills = [
  'SASS',
  'Material UI',
  'Git',
  'bootstrap',
  'jQuery',
  'APIs',
  'HTML',
  'css',
  'tailwindcss'
]

const contact = {
  email: 'f.zamanipour@gmail.com',
}

export { header, about, projects, skills, contact , otherSkills}
