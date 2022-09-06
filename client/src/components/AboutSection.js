import React from 'react'
import SectionTitle from './SectionTitle'
import { Card } from 'antd';

const AboutSection = (props) => {
    return (
        <section id="about" title="About Me" className="justify-content-center w-9 mx-3 mt-5 mb-3 p-5 border-round-md">
            <SectionTitle text="About Me"/>
            <p>
                Hello! My name is Angel Zhang, and I am a 3rd year Computer Science student at the University of Waterloo. I had completed internships as a Software Engineer at Huawei and as an IT support specialist at Tangam Systems. I am currently seeking Fall 2023 opportunities!
            </p>
            <p>
                During my free time, I also engage in...
            </p>
            <ul>
                {props.hobbies.map((hobby, key) => {
                    return <li key={key}>{hobby}</li>
                })}
            </ul>
        </section>
    )
}

export default AboutSection