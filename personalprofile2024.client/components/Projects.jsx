// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Game Automation Bot',
            description: 'Developed a C#.NET bot to automate repetitive gaming tasks, enhancing gameplay efficiency.',
        },
        {
            name: 'Language Learning App',
            description: "Currently developing an app that integrates ChatGPT's AI capabilities with gamification for language learning.",
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="content">
                <h2>Projects</h2>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <strong>{project.name}</strong>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
