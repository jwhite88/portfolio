import React from 'react'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2bc.png'

import { projects } from "../data/projects";

function Projects() {
    return <div id='projects' className='h-[100%] pt-[20px] pb-[100px] text-offblack-500 bg-tinygreen-900'>
        <h3 className="py-6 text-6xl pb-8">Projects</h3>
        <div className="project-container w-screen flex flex-wrap  justify-around">
            {projects.map((project, idx) => {
                return (
                    <>
                        <div key={idx} className="project-flex flex flex-row flex-wrap justify-between px-6">
                            <div className="project-card-container">
                                <div className="project-card rounded-lg bg-whitemarble-300 w-96 min-h-[5rem] pt-2 px-3 hover:scale-105 ease-out duration-300 text-left border-l-offblack-300">
                                    <h4 className="project-name">{project.name}</h4>
                                    <div className="project-img">
                                        <img className='aspect-auto object-cover p-3' src={require(`../assets/images/${project.image}.png`)} alt="project1" />
                                    </div>
                                    <div className="flex flex-nowrap justify-between px-3">
                                        <div className="project-url hover:scale-110 ease-out duration-300">
                                            <a href={project.demoLink}>Live Demo</a>
                                        </div>
                                        <div className="project-url hover:scale-110 ease-out duration-300">
                                            <a href={project.demoLink} >Github Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
            }
        </div>
    </div>;
}

export default Projects