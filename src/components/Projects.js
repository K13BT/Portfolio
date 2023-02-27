import React from 'react'


const Projects = () => {
  return (
    <div id='projects'>
      <div className="pro-card">
        <h3>PROJECTS</h3>
        <div className="project-items">
          <div className="item-card">
            <a href='https://google.com'><img src={require("../img/img2.jpg")} alt="A project" /></a>
                         
            <h2>Project name</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, illo?</p>
            <div className="links">
              <a href='https://google.com' className='s-link'>Demo</a>
              <a href='https://github.com'><i className='fa fa-github s-liink'></i></a>
            </div>
            
          </div>
          <div className="item-card">
            <a href='https://google.com'><img src={require("../img/img3.jpg")} alt="A project" /> </a>   
            <h2>Project name</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, illo?</p> 
            <div className="links">
              <a href='https://google.com' className='s-link'>Demo</a>
              <a href='https://github.com'><i className='fa fa-github s-link'></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects