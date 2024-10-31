// src/components/Skills.js
import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'C#.NET Development', level: 'Expert' },
        { name: 'SQL', level: 'Expert' },
        { name: 'JavaScript / HTML', level: 'Good' },
        { name: 'System Design', level: 'Good' },
        { name: 'Azure DevOps', level: 'Expert' },
        { name: 'GitHub', level: 'Good' },
        { name: 'Monitoring and Alerting', level: 'Good' },
        { name: 'Code Reviews', level: 'Expert' },
        { name: 'Test Coverage', level: 'Expert' },
        { name: 'Agile Methodologies', level: 'Good' },
        { name: 'GraphQL', level: 'Basic' },
        { name: 'React', level: 'Basic' },
        { name: 'Powershell', level: 'Expert' },
    ];

    return (
        <section id="skills" className="section">
            <div className="content">
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>
                            {skill.name} - {skill.level}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
