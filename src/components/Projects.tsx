import React from 'react'
import project1 from '../assets/images/project1.png'

function Projects() {
    return <div id='projects' className='h-[100vh] pt-[20px] text-offblack-500 bg-tinygreen-900'>
        <h3 className="py-4 text-6xl">Projects</h3>
        <div className="project-container">
            <div className="project-flex flex flex-row flex-wrap justify-between w-screen px-6">
                <div className="project-card-container">
                    <div className="project-card rounded-lg bg-whitemarble-300 w-96 min-h-[5rem] pt-2 px-3 hover:scale-105 ease-out duration-300 text-left border-l-offblack-300">
                        <h4 className="project-name">Our Planet</h4>
                        <div className="project-img">
                            <img className='aspect-auto object-cover p-3' src={project1} alt="project1" />
                        </div>
                        <div className="project-url">
                            <a href="https://jwhite88.github.io/naturegreen/">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Projects