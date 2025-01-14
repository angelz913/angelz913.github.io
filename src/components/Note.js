import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const Note = (props) => {
    const course = props.course;
    const courseCode = course.name.split(' ')[0].toLowerCase() +
                       course.name.split(' ')[1]
    const pdf = require('../assets/pdfs/' + courseCode + '.pdf')
    return (
        <Card
            hoverable
            className="w-12 my-2">
            <a href={pdf}>
                <Meta
                    title={<h3 className="text-base">{course.name} <span> | </span> {course.desc}</h3>}
                    description={course.type} />
            </a>
        </Card>
    )
}

export default Note