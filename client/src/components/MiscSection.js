import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import SectionTitle from './SectionTitle'

const contents = [
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
        key: 2,
        title: '锐评UW各大图书馆和教学楼',
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
    {
        key: 3,
        title: '鹅城梗百科',
        datePosted: "2023/5/3",
        lastUpdated: "2023/5/3"
    },
]

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: text => <Link to={"/" + text}> {text} </Link>
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

const MiscSection = () => {
    return (
        <section className="justify-content-center sm:w-10 md:w-9 lg:w-8 xl:w-7 mx-3 mt-5 mb-3 p-5 border-round-md">
            <SectionTitle text="Miscellanea" />
            <p>A collection of my reviews, reflections and random thoughts.</p>
            <Table dataSource={contents} columns={columns} />
        </section>
    )
}

export default MiscSection