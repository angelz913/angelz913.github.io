import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const articles = [
    {
        title: '锐评UW课程',
        contents: [
            '# Fall 2022 3A',
            '## CS 350',
            '普通操作系统课',
            '## CS 341',
            '普通算法课',
        ]
    },
    {
        title: '锐评UW周边餐厅',
        contents: [
            '# 中餐',
            '## 云尚米线',
            'Plaza餐厅中的神',
            '## 白家老汤',
            '分量足，性价比不错，牛肉面比兰州好吃',
        ]
    },
    {
        title: '锐评UW各大图书馆和教学楼',
        contents: [
            '# Dana Porter (DP)'
        ]
    },
    {
        title: '鹅城梗百科',
        contents: [
            '# 番茄神教'
        ]
    }
]

const Article = () => {
    const title = useParams().title
    let idx = -1
    for (let i = 0; i < articles.length; ++i) {
        if (articles[i].title === title) {
            idx = i
        }
    }
    return (
        <>
            <Button icon={<ArrowLeftOutlined />}><Link to="/articles">all articles</Link></Button>
            <article>
                <h1>{articles[idx].title}</h1>
                {articles[idx].contents.map((elem, key) => {
                    return (
                        <ReactMarkdown key={key}>{elem}</ReactMarkdown>
                    )
                })}
            </article>
        </>
    )
}

export default Article