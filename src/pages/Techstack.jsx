import React from 'react'
import './Techstack.css'
import { Navigation } from '../components/Navigation';
import { Footer} from '../components/Footer'
export const Techstack = () => {

    const proficientSkills = [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "CSS3", icon: "🎨" },
        { name: "HTML5", icon: "🌐" },
        { name: "Tailwind", icon: "🌊" },
        { name: "TypeScript", icon: "🟦" }
    ];

    const familiarSkills = [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Next.js", icon: "▲" },
        { name: "Git/GitHub", icon: "📂" }
    ];
    return (
        <>
            <Navigation />
            <section>
                <div className="tech-stack-container">

                    <div className="headder">
                        <h1 className='.tech-title'>Technical Expertise</h1>
                        <p className='.tech-subtitle'>The tools and technologies I use to bring ideas to life.</p>
                    </div>

                        <div className="stack-wrapper">
                            <div className="stack-category">
                                <div className="category-label">
                                    <h3>Proficient</h3>
                                    <span className="label-desc">Can code without Google</span>
                                </div>
                                <div className="skills-grid">
                                    {proficientSkills.map((skill) => (
                                        <div key={skill.name} className="skill-card proficient">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="stack-category">
                            <div className="category-label">
                                <h3>Familiar</h3>
                                <span className="label-desc">Need documentation</span>
                            </div>
                            <div className="skills-grid">
                                {familiarSkills.map((skill) => (
                                    <div key={skill.name} className="skill-card familiar">
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
            </div>
            </section>
            <Footer />
        </>
    )
}
