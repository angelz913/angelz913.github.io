import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import SectionTitle from './SectionTitle'

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: title => <Link to={"/articles/" + title}> {title} </Link>
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
        title: "UW Course Reviews",
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
    {
        key: 2,
        title: "Places to Eat",
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
    {
        key: 3,
        title: "Places to Study",
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
    {
        key: 4,
        title: "",
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
]

const ArticleSection = (props) => {
    return (
        <section id="articles" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6  border-round-md">
            <SectionTitle text="Articles" />
            <p>A collection of my reviews, reflections and random thoughts.</p>
            <Table dataSource={articles} columns={columns} />
        </section>
    )
}

export default ArticleSection