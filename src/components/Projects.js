import React from 'react';
import './Projects.css';

const Projects = () =>{

    const projects = [
        {id: 1, name: "School Book Renting System", description: "Final project for CS003A - Fundamentals of Computer Science II (C++)"},
        {id: 2, name: "The B and B Catalog", description: "A catalog to showcase my passion for nature and volunteering with kids - (React)"},
        {id: 3, name: "PCC Student Mobile App", description: "Student Mobile App for PCC Internship - (Typescript, React Native)"},
    ];


    return(
        
        <section id='projectsPg'>
            <div className="headerBlock">
                <div className="projectBox">
                <h2 className="projectHeader">Projects</h2>

                {projects.map(project =>(
                    <figure key = {project.id}>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                    </figure>
                ))}
                 <div className="gitHubLink">
                   <a href="https://github.com/malena-3" target="_blank">My GitHub</a>
                 </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;