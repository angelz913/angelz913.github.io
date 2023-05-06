import React from 'react'
import { Link } from 'react-router-dom'

const articles = [
    {
        key: 1,
        title: '锐评UW课程',
        desc: 'Placeholder',
        datePosted: 'May 3, 2023',
        lastUpdated: 'May 3, 2023'
    },
    {
        key: 2,
        title: '锐评UW周边餐厅',
        desc: 'Placeholder',
        datePosted: 'May 3, 2023',
        lastUpdated: 'May 3, 2023'
    },
    {
        key: 3,
        title: '锐评UW各大图书馆和教学楼',
        desc: 'Placeholder',
        datePosted: 'May 3, 2023',
        lastUpdated: 'May 3, 2023'
    },
    {
        key: 4,
        title: '鹅城梗百科',
        desc: 'Placeholder',
        datePosted: 'May 3, 2023',
        lastUpdated: 'May 3, 2023'
    }
]

const ArticleList = () => {
    return (
        <>
            {articles.map((article, key) => {
                return (
                    <Link to={'/articles/' + article.title}>
                        <section key={key}>
                            <h1>{article.title}</h1>
                            <h3>Posted on {article.datePosted} <span>Last updated on {article.lastUpdated} </span>
                            </h3>
                            <p>{article.desc}</p>
                        </section>
                    </Link>
                )
            })}
        </>
    )
}

export default ArticleList