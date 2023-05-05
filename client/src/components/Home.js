import React from 'react'
import { Link } from 'react-router-dom'
import AboutSection from './AboutSection'
import NotesSection from './NotesSection'
import ScoreSection from './ScoreSection'
import ArticleSection from './ArticleSection'
import Footer from './Footer'
import pfp from '../assets/resource/pfp.png'

const Home = () => {

    // const hobbies = [
    //     "🎹 playing the piano",
    //     "🥋 taekwondo",
    //     "📷 photography",
    //     "🤔 pondering life",
    //     "... and many more"
    // ]
    // const experienceList = [
    //     {
    //         position: "Incoming Software Engineer",
    //         company: "Huawei",
    //         date: "Jan. 2023 - Apr. 2023",
    //     },
    //     {
    //         position: "Software Engineer",
    //         company: "Huawei",
    //         date: "May. 2022 - Aug. 2022",
    //     },
    //     {
    //         position: "IT Support Specialist",
    //         company: "Tangam Systems",
    //         date: "Sep. 2021 - Dec. 2021"
    //     }
    // ]
    // const projects = [
    //     {
    //         name: "Personal Website",
    //         tags: ["React", "JavaScript", "Sass"],
    //         description: "This is the website you're browsing right now"
    //     },
    //     {
    //         name: "World Cup Stats",
    //         tags: ["Java", "SQL"],
    //         description: "A command-line application that allows users to retrive information about previous World Cups, developed with three other students"
    //     },
    //     {
    //         name: "WLP4 Compiler",
    //         tags: ["C++"],
    //         description: "A compiler that includes lexical, syntax and semantics analyses, and a MIPS assembly code generator for WLP4, a programming language similar to C++"
    //     },
    //     {
    //         name: "Photo Gallery",
    //         tags: ["React", "JavaScript", "CSS"],
    //         description: "A web application that allows users to create a customized gallery by uploading images; also supports features like filtering by tags and deleting images",
    //     },
    // ]

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: title => <Link to={"/article/" + title}> {title} </Link>
        },
        {
            title: 'Date Posted',
            dataIndex: 'datePosted',
            key: 'datePosted',
        },
        {
            title: 'Last Updated',
            dataIndex: 'lastUpdated',
            key: 'lastUpdated'
        }
    ]

    const articles = [
    {
        key: 1,
        title: '锐评UW课程',
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
    {
        key: 2,
        title: '锐评UW周边餐厅',
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
    {
        key: 3,
        title: '锐评UW各大图书馆和教学楼',
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
    {
        key: 4,
        title: '鹅城梗百科',
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
]

    return (
        <div className="home">
            <div className="flex flex-wrap justify-content-center w-12">
                <AboutSection pfp={pfp} />
                <NotesSection />
                <ScoreSection />
                <ArticleSection articles={articles} columns={columns} />
            </div>
            <Footer />
        </div>
    )
}

export default Home