import React from 'react'


const Projects = () => {
  return (
    <div id='projects'>
      <div className="pro-card">
        <h3>PROJECTS</h3>
        <div className="project-items">
          <div className="item-card">
            <a href='https://spontaneous-ganache-df8e63.netlify.app/'><img src={require("../img/challengex.png")} alt="A project" /></a>            
            <h2>ChallengeX</h2>
            <p></p>
            <div className="links">
              <a href='https://spontaneous-ganache-df8e63.netlify.app/' className='s-link'>Demo</a>
              <a href='https://github.com/K13BT/ChallengeX'><i className='fa fa-github s-liink'></i></a>
            </div>
          </div>
          
          <div className="item-card">
            <a href='https://image-finder-eta.vercel.app/'><img src={require("../img/imagefinder.png")} alt="A project" /></a>            
            <h2>Image Finder</h2>
            <p>Image finder made with react and tailwind that uses pixabay api to generate images</p>
            <div className="links">
              <a href='https://image-finder-eta.vercel.app/' className='s-link'>Demo</a>
              <a href='https://github.com/K13BT/Image-finder'><i className='fa fa-github s-liink'></i></a>
            </div>
          </div>

          <div className="item-card">
            <a href='https://expense-tracker-k13bt.vercel.app/'><img src={require("../img/expense.png")} alt="A project" /> </a>   
            <h2>Expense Tracker</h2>
            <p></p> 
            <div className="links">
              <a href='https://expense-tracker-k13bt.vercel.app/' className='s-link'>Demo</a>
              <a href='https://github.com/K13BT/Expense-tracker'><i className='fa fa-github s-link'></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects