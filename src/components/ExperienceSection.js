import React from 'react'
import SectionTitle from './SectionTitle'

import { Tag } from "antd";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

import ReactMarkdown from 'react-markdown'

import cerebrasLogo from '../assets/logos/cerebras.jpeg'
import amdLogo from '../assets/logos/amd.jpg'
import sidefxLogo from '../assets/logos/sidefx.jpg'
import huaweiLogo from '../assets/logos/huawei.jpg'
import tangamLogo from '../assets/logos/tangam.jpg'


const experienceList = [
    {
        title: "Kernel Engineer Intern",
        company: "Cerebras",
        date: "Sept. 2024 - Dec. 2024",
        skills: [],
        logo: cerebrasLogo,
        description: []
    },
    {
        title: "AI Compiler Engineer Intern",
        company: "AMD",
        date: "May. 2024 - Aug. 2024",
        skills: [ "C++", "MLIR",  "SPIR-V", "GLSL", "ONNX" ],
        logo: amdLogo,
        description: [ "Developed a [compiler pass for lowering MLIR to SPIR-V](https://github.com/llvm/llvm-project/pull/95942)",
            "Presented at [MLIR's Open Design Meeting](https://www.youtube.com/watch?v=-qoMMrlYvGs)"
        ]
    },
    {
        title: "CG Pipeline Software Developer Intern",
        company: "SideFX",
        date: "Sept. 2023 - Dec. 2023",
        skills: [ "C++", "Python" ],
        logo: sidefxLogo,
        description: [ "Worked on [Houdini Engine](https://www.sidefx.com/products/houdini-engine/)",
            "Developed new features for [Houdini's PDGs (Procedural Dependency Graph)](https://www.sidefx.com/products/houdini/pdg/)"
         ]
    },
    {
        title: "Compiler & Infrastructure Engineer Intern",
        company: "Huawei Canada",
        date: "May. 2022 - Aug. 2022 & Jan. 2023 - Apr. 2023",
        skills: [ "C++", "Python", "Jenkins", "Shell Scripting" ],
        logo: huaweiLogo,
        description: [ "Streamlined compiler tuning processes and facilitated the exploration of optimization opportunities in multiple benchmarks using Python and Shell scripts" ]
    },
    {
        title: "Compiler Engineer Intern",
        company: "Huawei Canada",
        date: "May. 2022 - Aug. 2022 & Jan. 2023 - Apr. 2023",
        skills: [ "C++", "Python", "Jenkins", "Shell Scripting" ],
        logo: huaweiLogo,
        description: [
            "Developed an interface that connects LLVM infrastructure with an ML framework",
            "Co-authored paper [ACPO: AI-Enabled Compiler-Driven Program Optimization](https://arxiv.org/abs/2312.09982)" ]
    },
    {
        title: "IT Support Intern",
        company: "Tangam Systems",
        date: "Sep. 2021 - Dec. 2021",
        skills: [ "Angular", "TypeScript", "IT Support" ],
        logo: tangamLogo,
        description: [ "Designed and developed a full-stack web application using Angular, TypeScript, Sass, and Node.js from scratch, serving as the company's new IT support request platform."]
    },
]

const ExperienceSection = () => {
    return (
        <section id="experience" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6 mb-5 border-round-md">
            <SectionTitle text="Experience"/>
            <VerticalTimeline layout="1-column-left" >
                {experienceList.map((experience, key) => {
                    return (
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            key={key}
                            icon={<img src={experience.logo}></img>}
                            date={experience.date} dateClassName="font-normal" >
                            <h2 className="vertical-timeline-element-title text-lg">
                                {experience.title}
                            </h2>
                            <h3 className="vertical-timeline-element-subtitle text-base">
                                {experience.company}
                            </h3>
                            {experience.skills.map((skill, key) => {
                                return <Tag className="mt-3 mr-2 p-1 text-sm" key={key}>{skill}</Tag>
                            })}
                            {experience.description.map((bullet, key) => {
                                return <ReactMarkdown key={key} >{" • " + bullet}</ReactMarkdown>
                            })}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </section>
    )
}

export default ExperienceSection
