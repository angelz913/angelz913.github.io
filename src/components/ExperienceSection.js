import React from 'react'
import SectionTitle from './SectionTitle'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import amdLogo from '../assets/logos/amd.jpg'
import sidefxLogo from '../assets/logos/sidefx.jpg'
import huaweiLogo from '../assets/logos/huawei.jpg'
import tangamLogo from '../assets/logos/tangam.jpg'


const experienceList = [
    {
        title: "AI Compiler Engineer",
        company: "Advanced Micro Devices (AMD)",
        date: "May. 2024 - Aug. 2024",
        skills: [ "C++", "LLVM", "MLIR", "Torch", "ONNX" ],
        logo: amdLogo
    },
    {
        title: "CG Pipeline Software Developer",
        company: "SideFX Software",
        date: "Sept. 2023 - Dec. 2023",
        skills: [ "C++", "Python",  ],
        logo: sidefxLogo
    },
    {
        title: "Compiler & Infrastructure Engineer",
        company: "Huawei Technologies Canada",
        date: "Jan. 2023 - Apr. 2023",
        skills: [ "C++", "Python", "Jenkins", "Shell Scripting" ],
        logo: huaweiLogo
    },
    {
        title: "Compiler Engineer",
        company: "Huawei Technologies Canada",
        date: "May. 2022 - Aug. 2022",
        skills: [ "C++", "Python", "LLVM", ],
        logo: huaweiLogo
    },
    {
        title: "IT Support Specialist",
        company: "Tangam Systems",
        date: "Sep. 2021 - Dec. 2021",
        skills: [ "Angular", "TypeScript", "IT Support" ],
        logo: tangamLogo
    },
]

const ExperienceSection = (props) => {
    return (
        <section id="experience" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6 mb-5 border-round-md">
            <SectionTitle text="Experience"/>
            <VerticalTimeline layout="1-column-left" >
                {experienceList.map((experience, key) => {
                    return (
                        <VerticalTimelineElement 
                            key={key} 
                            icon={<img src={experience.logo}></img>} 
                            date={experience.date} >
                            <h3 className="vertical-timeline-element-title">
                                {experience.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {experience.company}
                            </h4>
                            <p className="text-sm">
                                {experience.skills.join(' • ')}
                            </p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </section>
    )
}

export default ExperienceSection
