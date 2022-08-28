import React from 'react'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'

const Home = () => {
  const aboutTexts = [
    "Hello! My name is Angel Zhang, and I am a 3rd year Computer Science student at the University of Waterloo. I had completed internships as a Software Engineer at Huawei and as an IT support specialist at Tangam Systems. I am currently seeking Fall 2023 opportunities.",
    "I have a keen interest in the world of web development, and machine learning. My dream is to apply my knowledge and skills to make people's lives better!",
    "During my free time, I engage in Taekwondo 🥋, playing the piano 🎹, photography 📷, pondering life, etc."
  ]
  const experienceList = [
        {
            position: "Incoming Software Engineer",
            company: "Huawei",
            date: "Jan. 2023 - Apr. 2023"
        },
        {
            position: "Software Engineer",
            company: "Huawei",
            date: "May. 2022 - Aug. 2022"
        },
        {
            position: "IT Support Specialist",
            company: "Tangam Systems",
            date: "Sep. 2021 - Dec. 2021"
        }
    ]
  return (
    <div>
      <AboutSection aboutTexts={aboutTexts}/>
      <ExperienceSection experienceList={experienceList} />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default Home