import React from 'react'
import SliderProjects from './SliderProjects'
import FRRONTPHOTO from './assets/front-photo.jpg'
import Skills from './Skills'

const home = () => {
  return (
    <div>
    <div data-aos="fade-down" className='container p-3'>
      <div className="p-3 mb-2 bg-dark text-white">
        <div className="container">
          <p className='text-center'>Hi, I’m <b className='color-theme'>Michael Alex Basweti</b>.</p>
        <p className='text-center'>Software engineer 💻, builder 🏗️, and explorer of ideas 🚀.</p>
        <p className='text-center'>Let’s build something meaningful together.</p>
        </div>
      </div>
    </div>
      
      <div data-aos="zoom-in" className="container p-3 mt-1">
        <h3 className="color-theme text-center display-3">
          🗂️ Work Overview
        </h3>
        <hr className='border border-6 opacity-75'/>
      </div>
      <div data-aos="zoom-in" className='container-fluid'>
        <SliderProjects />
      </div>
      <div className='container p-3'>
      <div className="p-3 mt-4 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div data-aos="fade-right" className="col-md-6">
          <h1 className='display-3'>Michael Alex Basweti</h1>
          <h2 className='display-4 color-theme'><em>Software Engineer</em></h2>
          <h3 className='display-6'>Nairobi, Kenya</h3>
          <hr className='border border-3 opacity-75'/>
          <p className='justify-content-center'>🌍 I’m a <strong className='color-theme'>Full-Stack Developer</strong> from Nairobi, Kenya, blending a background in <strong className='color-theme'>problem-solving</strong> with a passion for <strong className='color-theme'>building systems that scale and deliver real impact</strong>. For over <strong className='color-theme'>6 years</strong>, I’ve been crafting <strong className='color-theme'>scalable, Full-stack applications</strong> that solve real-world problems and support seamless user experiences.</p>
          <p className='justify-content-center'>While I’m comfortable across the stack, my <strong className='color-theme'>strength lies in backend development</strong>—designing robust APIs, architecting scalable solutions, and integrating complex systems. I work with technologies like <strong className='color-theme'>Express.js</strong>, <strong className='color-theme'>Django REST Framework</strong>, <strong className='color-theme'>Node.js</strong>, and <strong className='color-theme'>AWS</strong>, while also building clean, user-focused frontends with <strong className='color-theme'>React</strong>, <strong className='color-theme'>Next.js</strong>, <strong className='color-theme'>Tailwind CSS</strong>, and <strong className='color-theme'>Material-UI</strong>.</p>
          <p className='justify-content-center'>Curiosity is my fuel. I see every project as an opportunity to learn, build, and make a difference. Let’s collaborate and bring bold ideas to life.</p>
        </div>
        <div className="col-md-1"></div>
        <div data-aos="flip-left" className="col-md-4">
          <img src={FRRONTPHOTO} alt="About Me" className="img-fluid rounded-circle mx-auto d-block" />
        </div>
        </div>
        </div>
      </div>
      </div>
      <div>
        <Skills />
      </div>
    </div>
  )
}

export default home