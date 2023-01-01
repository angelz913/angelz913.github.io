import React from 'react'
import Navbar from './Navbar'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'

const Home = () => {
    const aboutTexts = [
        // "Hello! My name is Angel Zhang, and I am a 3rd year Computer Science student at the University of Waterloo. I had completed internships as a Software Engineer at Huawei and as an IT support specialist at Tangam Systems. I am currently seeking Fall 2023 opportunities!",
        // "I have a keen interest in the world of web development, and machine learning. My dream is to apply my knowledge and skills to make people's lives better!",
        // "During my free time, I also engage in..."
    ]
    const hobbies = [
        "🥋 taekwondo",
        "🎹 playing the piano",
        "📷 photography",
        "🤔 pondering life",
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
            tags: ["React", "JavaScript", "Sass"],
            description: "This is the website you're browsing right now"
        },
        {
            name: "Photo Gallery",
            tags: ["React", "JavaScript", "CSS"],
            description: "A web application that allows users to create a customized gallery by uploading images; also supports features like filtering by tags and deleting images",
        },
        {
            name: "Constructor",
            tags: ["Java", "SQL"],
            description: "A command‑line application that allows users to learn about World Cups, developed with three other students"
        },
        {
            name: "Constructor",
            tags: ["C++"],
            description: "A multiplayer command-line based game inspired by Catan, developed with two other students"
        },
        {
            name: "WLP4 Compiler",
            tags: ["C++"],
            description: "A compiler that contains a scanner, a parser, a semantics checker and a MIPS assembly code generator for WLP4, a programming language similar to C++"
        },
    ]
    return (
        <div className="home flex flex-wrap justify-content-center w-12">
            <AboutSection aboutTexts={aboutTexts} hobbies={hobbies}/>
            <ExperienceSection experienceList={experienceList} />
            <ProjectSection projects={projects}/>
            <ContactSection />
        </div>
    )
}

export default Home