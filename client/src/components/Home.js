import React from 'react'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'

const Home = () => {
    const aboutTexts = [
        "Hello! My name is Angel Zhang, and I am a 3rd year Computer Science student at the University of Waterloo. I had completed internships as a Software Engineer at Huawei and as an IT support specialist at Tangam Systems. I am currently seeking Fall 2023 opportunities.",
        // "I have a keen interest in the world of web development, and machine learning. My dream is to apply my knowledge and skills to make people's lives better!",
        "During my free time, I also engage in..."
    ]
    const hobbies = [
        "🥋 Taekwondo",
        "🎹 Play music",
        "📷 Photography",
        "🤔 Pondering life questions",
        "..."
    ]
    const experienceList = [
        {
            position: "Incoming Software Engineer",
            company: "Huawei",
            date: "Jan. 2023 - Apr. 2023",
        },
        {
            position: "Software Engineer",
            company: "Huawei",
            date: "May. 2022 - Aug. 2022",
        },
        {
            position: "IT Support Specialist",
            company: "Tangam Systems",
            date: "Sep. 2021 - Dec. 2021"
        }
    ]
    const projects = [
        {
            name: "Portfolio Website",
            tags: ["React, JavaScript", "Sass"]
        },
        {
            name: "Photo Gallery",
            tags: ["React", "JavaScript", "CSS"],
            description: "Web application that allows you to create a customized photo gallery",
        },
        {
            name: "Constructor Game",
            tags: ["C++"],
            description: "Multiplayer command line based game, developped with two other students as the final project for CS 246"
        },
        {
            name: "WLP4 Compiler",
            tags: ["C++"],
            description: "Compiler that includes a scanner, a parser, a semantics checker and a MIPS assembly code generator for WLP4, a C-like language; CS 241 project"
        },
        {
            name: "Perfect Tone (in progress)",
            tags: ["React", "JavaScript", "Socket.io", "MongoDB"],
            description: "Web app for training your ear",
        },
    ]
    return (
        <div>
            <AboutSection aboutTexts={aboutTexts} hobbies={hobbies}/>
            <ExperienceSection experienceList={experienceList} />
            <ProjectSection projects={projects}/>
            <ContactSection />
        </div>
    )
}

export default Home