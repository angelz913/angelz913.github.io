import React from 'react'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import pfp from '../assets/resource/pfp.png'

const Home = () => {

    const hobbies = [
        "🎹 playing the piano",
        "🥋 taekwondo",
        "📷 photography",
        "🤔 pondering life",
        "... and many more"
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
            name: "Personal Website",
            tags: ["React", "JavaScript", "Sass"],
            description: "This is the website you're browsing right now"
        },
        {
            name: "World Cup Stats",
            tags: ["Java", "SQL"],
            description: "A command-line application that allows users to retrive information about previous World Cups, developed with three other students"
        },
        {
            name: "WLP4 Compiler",
            tags: ["C++"],
            description: "A compiler that includes lexical, syntax and semantics analyses, and a MIPS assembly code generator for WLP4, a programming language similar to C++"
        },
        {
            name: "Photo Gallery",
            tags: ["React", "JavaScript", "CSS"],
            description: "A web application that allows users to create a customized gallery by uploading images; also supports features like filtering by tags and deleting images",
        },
    ]
    return (
        <div className="home">
            <div className="flex flex-wrap justify-content-center w-12">
                <AboutSection pfp={pfp} hobbies={hobbies}/>
                <ExperienceSection experienceList={experienceList} />
                <ProjectSection projects={projects}/>
                {/* <ContactSection /> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home