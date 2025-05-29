import React from 'react'
import  MichaelPhoto from './assets/michaelphoto.png'
import Skills from './Skills' // Ensure you have the correct path to your image

const about = () => {
  
  return (
    <div data-aos="zoom-in" className='container p-3'>
      <div className="row">
        <div className="col-md-4">
          <img src={MichaelPhoto} alt="About Me" className="img-fluid rounded-circle mx-auto d-block" />
        </div>
        <div className="col-md-6 offset-md-1">
          <h1 className='display-2'>🌌 About Me </h1>
          <hr className='border border-3 opacity-75'/>
        <p>Hey there! I’m <b>Michael Alex Basweti</b>, a software engineer, dreamer, and relentless explorer of ideas.</p>

          <p>I believe technology isn’t just about code—it’s a bridge between imagination and reality. Whether it's building efficient systems that solve real-world problems, experimenting with AI to unlock new possibilities, or exploring the deeper patterns of life itself, I’m driven by a curiosity that refuses to settle for the surface.</p>

          <p>From designing scalable web applications to integrating AI into user experiences, I thrive at the intersection of creativity, problem-solving, and impact. My projects often reflect this blend, whether it's optimizing logistics systems for better efficiency, building chatbots that understand people, or simply crafting code that’s as elegant as it is functional.</p>

          <p>But beyond the syntax and algorithms, I see software engineering as a human pursuit—an art form that connects us, empowers us, and, if we dare, helps us understand the universe a little better.</p>

          <p>Let’s build something meaningful together.</p>
        </div>
        
      </div>
      <div>
      <Skills />
      </div>
    </div>
  )
}

export default about