import React from 'react'
import SectionTitle from './SectionTitle'

import { Tag } from "antd";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';


import cerebrasLogo from '../assets/logos/cerebras.jpeg'
import amdLogo from '../assets/logos/amd.jpg'
import sidefxLogo from '../assets/logos/sidefx.jpg'
import huaweiLogo from '../assets/logos/huawei.jpg'
import tangamLogo from '../assets/logos/tangam.jpg'


const experienceList = [
    {
        title: "Incoming Kernel Engineer Intern",
        company: "Cerebras Systems",
        date: "Sept. 2024 - Dec. 2024",
        skills: [],
        logo: cerebrasLogo,
        description: []
    },
    {
        title: "AI Compiler Engineer Intern",
        company: "Advanced Micro Devices (AMD)",
        date: "May. 2024 - Aug. 2024",
        skills: [ "C++", "MLIR",  "SPIR-V", "GLSL", "ONNX" ],
        logo: amdLogo,
        description: ["Created a compiler pass in C++ for lowering MLIR to SPIR-V, enhancing upstream compilation processes for an intermediate language used in graphics and compute APIs such as OpenCL, OpenGL, and Vulkan.",
            "Implemented SPIR-V dialect conversions and developed comprehensive tests using LLVM lit for multiple vector operations in MLIR, expanding the compiler support for parallel computation and GPU-based graphics.",
            "Contributed to the open-source Torch-MILR compiler framework by addressing issues and enhancing the robustness for multiple ONNX and Torch operators." ]
    },
    {
        title: "CG Pipeline Software Developer Intern",
        company: "SideFX Software",
        date: "Sept. 2023 - Dec. 2023",
        skills: [ "C++", "Python"  ],
        logo: sidefxLogo,
        description: ["Leveraged multithreading in C++ to optimize data retrieval methods in Houdini Engine, resulting in a 67% reduction in client-server data transfer costs and enhancing overall efficiency.",
            "Expanded the functionality of Houdini's Task Operator by developing new features in Python, providing users with more flexible options for generating streamlined CG workflows.",
            "Identified and resolved a memory issue in Houdini Engine by modifying a code generation script containing incompatible data types, reducing memory usage by 50%." ]
    },
    {
        title: "Compiler Engineer Intern",
        company: "Huawei Technologies Canada",
        date: "Jan. 2023 - Apr. 2023",
        skills: [ "C++", "Python", "Jenkins", "Shell Scripting" ],
        logo: huaweiLogo,
        description: ["Streamlined compiler tuning processes and facilitated the exploration of optimization opportunities in multiple benchmarks using Python and Shell scripts.",
            "Implemented a CI workflow using Jenkins for major development branches to ensure a seamless merging process with the main branch.",
            "Identified and fixed bugs in existing C++ code, resolving memory usage issues caused by defunct processes." ]
    },
    {
        title: "Compiler Engineer Intern",
        company: "Huawei Technologies Canada",
        date: "May. 2022 - Aug. 2022",
        skills: [ "C++", "Python", "LLVM" ],
        logo: huaweiLogo,
        description: ["Developed an interface in C++ and Python to connect LLVM with a machine learning framework, enabling seamless interaction between the two parties.",
            "Refactored and optimized existing Python scripts, leading to a 93% reduction in the compilation time of various benchmarks when the ML-enabled compiler is used." ]
    },
    {
        title: "IT Support Intern",
        company: "Tangam Systems",
        date: "Sep. 2021 - Dec. 2021",
        skills: [ "Angular", "TypeScript", "IT Support" ],
        logo: tangamLogo,
        description: ["Designed and developed a full-stack web application using Angular, TypeScript, Sass, and Node.js from scratch, serving as the company's new IT support request platform."]
    },
]

const ExperienceSection = (props) => {
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
                            <h2 className="vertical-timeline-element-title">
                                {experience.title}
                            </h2>
                            <h3 className="vertical-timeline-element-subtitle">
                                {experience.company}
                            </h3>
                            {experience.skills.map((skill, key) => {
                                return <Tag className="mt-3 mr-2 p-1 text-sm font-normal">{skill}</Tag>
                            })}
                            {experience.description.map((bullet, key) => {
                                return <p className="font-normal text-sm">{" • " + bullet}</p>
                            })}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </section>
    )
}

export default ExperienceSection
