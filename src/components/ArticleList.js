import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const articles = [
    {
        title: 'UW Course Reviews',
        datePosted: 'May 3, 2023',
        lastUpdated: 'May 3, 2023',
        contents: [

        ]
    },
]

const ArticleList = () => {
    return (
        <section id="articles" className="flex justify-content-center">
            {articles.map((article, key) => {
                return (
                    <Card
                        bordered={false}
                        className="w-8 mx-8 my-4">
                        <Link to={'/articles/' + 
                                  article.title.toLowerCase().split(' ').join('-')}>
                            <section key={key}>
                                <h1 className="text-xl">{article.title}</h1>
                                <h3 className="text-sm font-normal">Posted on {article.datePosted} | Last updated on {article.lastUpdated}
                                </h3>
                            </section>
                        </Link>
                    </Card>
                )
            })}
        </section>
    )
}

export default ArticleList