import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Button } from 'antd'
import { Card } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const articles = [
    {
        title: 'UW Course Reviews',
        datePosted: 'May 3, 2023',
        lastUpdated: 'May 3, 2023',
        contents: [

        ]
    },
]

const Article = () => {
    const title = useParams().title
    let idx = -1
    for (let i = 0; i < articles.length; ++i) {
        if (articles[i].title.toLowerCase().split(' ').join('-') === title) {
            idx = i
        }
    }
    return (
        <section className="article">
            {/* <Button icon={<ArrowLeftOutlined />}><Link to="/articles">all articles</Link></Button> */}
            <article className="flex my-6 justify-content-center">
                <h1 className="text-3xl">{articles[idx].title}</h1>
                {articles[idx].contents.map((elem, key) => {
                    return (
                        <ReactMarkdown key={key}>{elem}</ReactMarkdown>
                    )
                })}
            </article>
        </section>
    )
}

export default Article