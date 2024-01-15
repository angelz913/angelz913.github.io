import React from 'react'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import NotesSection from './NotesSection'
import ScoreSection from './ScoreSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

const Home = () => {

    return (
        <div className="home">
            <div className="flex flex-wrap justify-content-center w-12">
                <AboutSection />
                <ExperienceSection />
                <NotesSection />
                <ScoreSection />
            </div>
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Home