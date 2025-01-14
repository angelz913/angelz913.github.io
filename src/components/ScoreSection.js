import React from "react"
import SectionTitle from "./SectionTitle"
import Score from "./Score"

const scores = [
    {
        title: "Nuclear Magnetic Resonance",
        desc: "A mash-up of Aliez and Only My Railgun"
    },
    // {
    //     title: "Gurenge",
    //     desc: "A piano/violin/flute trio arrangement \
    //         for Demon slayer opening."
    // },
    // {
    //     title: "The Great Locomotive Chase",
    //     desc: "A piano arrangement for my favourite \
    //         high school concert band piece."
    // },
]

const Scores = () => {
    return (
        <section id="scores" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6 m-5border-round-md">
            <SectionTitle text="Scores" />
            <p className="text-base">Mostly piano arrangements.</p>
            {scores.map((score, key) => {
                return (
                    <Score key={key} title={score.title} desc={score.desc} />
                )
            })}
        </section>
    )
}

export default Scores