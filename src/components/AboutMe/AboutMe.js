import React from 'react'
import './Aboutme.css'
// import { SlScreenDesktop, SlLayers } from 'react-icons/sl'
import { BsFillLayersFill } from 'react-icons/bs'
import { AiFillCode } from 'react-icons/ai'
import { MdFitScreen } from 'react-icons/md'

function AboutMe() {
  return (
    <section className='aboutme center' id='aboutme'>
      <h2>Hi, I’m Ebenezar. Nice to meet you.</h2>
      <p>
        I am full-stack web developer and designer specialist. Feel free to take
        a look at my latest projects on github.Remotely available UTC−8 to
        UTC+1. ebenezarbukosia@gmail.com
      </p>
      <div className='stats-wrapper'>
        <div className='card'>
          <BsFillLayersFill className='react-icons' />
          <h3>Designer</h3>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <h4 className='card-h4'>Things I enjoy designing:</h4>
          <small>Logos, UX, UI, Illustration, Desktop publishing</small>
          <h4 className='card-h4'>Design Tools</h4>
          <small>Figma</small>
          <small>Adobe Illustrator</small>
          <small>Adobe Photoshop</small>
        </div>
        <div className='card'>
          <MdFitScreen className='react-icons' />
          <h3>Frontend Developer</h3>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h4 className='card-h4'>My stacks:</h4>
          <small>HTML, CSS, SASS, Javascript, TypeScript</small>
          <h4 className='card-h4'>Frameworks</h4>
          <small>React.js</small>
          <small>Tailwind</small>
          <small>Next.js</small>
          <small>Asp.NET</small>
        </div>
        <div className='card'>
          <AiFillCode className='react-icons' />
          <h3>Backend Developer</h3>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h4 className='card-h4'>My stack:</h4>
          <small>Ruby, Javascript, Typescript, C#, Sql</small>
          <h4 className='card-h4'>Frameworks</h4>
          <small>Ruby on Rails</small>
          <small>Node.js</small>
          <small>Asp.NET</small>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
