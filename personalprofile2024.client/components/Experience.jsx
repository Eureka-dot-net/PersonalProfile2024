// src/components/Experience.js
import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'World Hiker (2023 - Present)',
            description: 'Sabbatical involving over 2,000 miles of hiking across continents, enhancing resilience and cross-cultural communication.',
        },
        {
            role: 'DevOps Consultant, CPA Global (2018 – 2022)',
            description:
                'Led CI/CD pipeline creation in Azure DevOps, improving deployment efficiency by 25% and reducing Azure costs by £20k monthly.',
        },
        {
            role: 'ALM Solutions Manager, Axa Personal Lines (2016 – 2017)',
            description:
                'Transitioned Axa’s processes from TFS to Azure DevOps and developed Test Factory web/client application.',
        },
        {
            role: 'ALM Engineer/Configuration Manager, Axa Personal Lines (2010 – 2016)',
            description:
                'Managed ALM processes, implemented CI strategies, and created SSRS reports for build and quality metrics.',
        },
        {
            role: 'Developer, Axa Personal Lines (2009 – 2010)',
            description:
                'Designed and developed insurance websites using C#.NET, JavaScript, HTML, and SQL.',
        },
    ];

    return (
        <section id="experience" className="section">
            <div className="content">
                <h2>Experience</h2>
                <ul>
                    {experiences.map((experience, index) => (
                        <li key={index}>
                            <strong>{experience.role}</strong>
                            <p>{experience.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
