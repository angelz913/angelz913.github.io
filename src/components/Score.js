import React from 'react'
import { FilePdfOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Card } from 'antd'

const Score = (props) => {
    const title = props.title.split(' ').join('_')
    const pdf = require('../assets/pdfs/' + title + '.pdf')
    // const video = require('../assets/videos/' + title + '.mp4')
    return (
        <Card
            title={props.title}
            bordered={false}
            className="my-5">
            <p>{props.desc}</p>
            <div className="score-button-container flex flex-column">
                {/* <a href={video} className="mb-2">
                    <Button>
                        Listen to Demo <PlayCircleOutlined />
                    </Button>
                </a> */}
                <a href={pdf}>
                    <Button>
                        View Score <FilePdfOutlined />
                    </Button>
                </a>
            </div>   
        </Card>
    )
}

export default Score