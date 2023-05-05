import React from 'react'
import SectionTitle from './SectionTitle'
import Score from './Score'

const scores = [
    {
        title: "Nuclear Magnetic Resonance",
        desc: "A mash-up of Aliez and Only My Railgun"
    },
    {
        title: "Gurenge",
        desc: "A piano/violin/flute trio arrangement for Demon Slayer's opening"
    },
    {
        title: "The Great Locomotive Chase",
        desc: "My favourite high school concert band piece"
    },
]

const Scores = () => {
    return (
        <section id="scores" className="justify-content-center sm:w-10 md:w-9 lg:w-8 xl:w-7 mx-3 mt-5 mb-3 p-5 border-round-md">
            <SectionTitle text="Scores" />
            <p>Mostly piano arrangements for anime music</p>
            {scores.map((score, key) => {
                return (
                    <Score key={key} title={score.title} desc={score.desc} />
                )
            })}
        </section>
    )
}

export default Scores