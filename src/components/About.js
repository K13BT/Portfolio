import React from 'react'
import {SiPostgresql, SiReact, SiExpress, SiTailwindcss, SiBootstrap} from "react-icons/si";

const About = () => {
  return (
    <div id='about'>
      <h1 className='name'>Kajal Bhatt</h1>
      <div className="skills">
        <h2>Skills</h2>
        <div className='list'>
            <SiPostgresql className='logos'/>
            <SiExpress className='logos'/>
            <SiReact className='logos'/>
            <SiTailwindcss className='logos'/>
            <SiBootstrap className='logos'/>
        </div>
      </div>
    </div>
  )
}

export default About