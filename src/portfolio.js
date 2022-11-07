const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Eb.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ebenezar',
  role: 'Software Engineer',
  description:
    'I design and code beatifully minimalistic products, and I love what I do.',
  resume:
    'https://drive.google.com/file/d/1RHwv4vIDG2qTz801efHUQsU-1wdeYM7P/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/ebenezar-bukosia-29ab67200',
    github: 'https://github.com/Ebenezr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Health-Soft',
    description:
      'Health soft is a hospital management system module ment to manage patient admintion, patient appointments and patients treatment.',
    stack: ['SASS', 'TypeScript', 'React', 'Ruby on Rails'],
    sourceCode: 'https://github.com/Ebenezr/health-soft',
    livePreview: 'http://health-soft.vercel.app',
  },
  {
    name: 'Clock-me',
    description:
      'Clock-me: is is a web application used to keep track of employees and thier clock-in and clock out time and also calculates their salary based on total clocked time.',
    stack: ['SASS', 'TypeScript', 'React', 'Ruby on Rails'],
    sourceCode: 'https://github.com/Ebenezr/clock-me-front-end',
    livePreview: 'http://clock-me-front-end.vercel.app',
  },
  {
    name: 'Help-Desk',
    description:
      'Helpdesk is a question and answer website for students. A student can ask questions, view previusly assked questions, answer questions and vote for questions that was helpfull. A student can also bookmark a question and be able to follow up on it later.',
    stack: ['SASS', 'TypeScript', 'React', 'Ruby on Rails'],
    sourceCode: 'https://github.com/Ebenezr/HelpDesk',
    livePreview: 'http://helpdesk-six.vercel.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Redux',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ebenezarbukosia@mail.com',
}

export { header, about, projects, skills, contact }
