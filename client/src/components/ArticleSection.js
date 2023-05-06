import React from 'react'
import { Table } from 'antd'
import SectionTitle from './SectionTitle'

const ArticleSection = (props) => {
    return (
        <section id="articles" className="justify-content-center sm:w-10 md:w-9 lg:w-8 xl:w-7 mx-3 mt-5 mb-3 p-5 border-round-md">
            <SectionTitle text="Articles" />
            <p>A collection of my reviews, reflections and random thoughts.</p>
            <Table dataSource={props.articles} columns={props.columns} />
        </section>
    )
}

export default ArticleSection