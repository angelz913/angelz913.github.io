import React from "react"
import { Table } from "antd"
import { useState } from "react"
import { Checkbox } from "antd"

import SectionTitle from "./SectionTitle"
import Note from "./Note"


const courses = [
    {
        name: "CS 456",
        desc: "Computer Networks",
        type: "Summary sheets + review questions"
    },
    // {
    //     name: "CS 341",
    //     desc: "Algorithms",
    //     type: "Handwritten lecture notes + summary sheets",
    // },
    {
        name: "CS 350",
        desc: "Operating Systems",
        type: "Lecture notes + summary sheets + review questions"
    },
    {
        name: "CO 487",
        desc: "Applied Crytography",
        type: "Handwritten summary sheets"
    },
    {
        name: "CS 240",
        desc: "Data Structures and Data Management",
        type: "Summary sheets for each module"
    },
    {
        name: "STAT 231",
        desc: "Statistics",
        type: "Summary sheets of key terms and formula for units 1-4"
    },
    {
        name: "CS 245",
        desc: "Logic and Computation",
        type: "Summary sheets of definitions and formula"
    },
    { 
        name: "STAT 230",
        desc: "Probability",
        type: "Summary sheets of definitions and formula"
    },
    {
        name: "MATH 239",
        desc: "Introduction to Combinatorics",
        type: "Summary sheets of definitions and formula"
    },
    // {
    //     name: "MATH 136",
    //     desc: "Linear Algebra 1",
    //     type: "Summary sheets of definitions and formula",
    // },
    {
        name: "CS 135",
        desc: "Designing Functional Programs",
        type: "Notes for each module"
    }, 
]

const courseTypes = ["CO", "CS", "MATH", "STAT"]
const courseLevels = ["1XX", "2XX", "3XX", "4XX"]

const Notes = () => {

    const [selectedCourseTypes, setSelectedCourseTypes] = useState(courseTypes)
    const [selectedCourseLevels, setSelectedCourseLevels] = useState(courseLevels)
    const [checkAllTypes, setCheckAllTypes] = useState(true)
    const [checkAllLevels, setCheckAllLevels] = useState(true)
    const [indeterminateTypes, setIndeterminateTypes] = useState(false)
    const [indeterminateLevels, setIndeterminateLevels] = useState(false)

    const onChangeTypes = checkedTypes => {
        setSelectedCourseTypes(checkedTypes)
        setCheckAllTypes(checkedTypes.length === courseTypes.length)
        setIndeterminateTypes(0 < checkedTypes.length && checkedTypes.length < courseTypes.length)
    }
    const onChangeLevels = checkedLevels => {
        setSelectedCourseLevels(checkedLevels)
        setCheckAllLevels(checkedLevels.length === courseTypes.length)
        setIndeterminateLevels(0 < checkedLevels.length && checkedLevels.length < courseLevels.length)
    }
    const onChangeCheckAllTypes = event => {
        setSelectedCourseTypes(event.target.checked ? courseTypes : [])
        setCheckAllTypes(event.target.checked)
        setIndeterminateTypes(false)
    }
    const onChangeCheckAllLevels = event => {
        setSelectedCourseLevels(event.target.checked ? courseLevels : [])
        setCheckAllLevels(event.target.checked)
        setIndeterminateLevels(false)
    }
    const filteredCourses = courses.filter(course => {
        let type = course.name.split(" ")[0]
        let level = course.name.split(" ")[1][0] + "XX"
        return selectedCourseTypes.includes(type) && 
            selectedCourseLevels.includes(level)
    })

    return (
        <section id="notes" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6 m-5 border-round-md">
            <SectionTitle text="Notes"/>
            <p className="text-base">Notes I have created for my university courses.</p>
            <Checkbox.Group options={courseTypes} value={selectedCourseTypes} 
                defaultValue={courseTypes} onChange={onChangeTypes} />
            <Checkbox indeterminate={indeterminateTypes} onChange={onChangeCheckAllTypes} 
                checked={checkAllTypes} className="mb-2">Select All</Checkbox>
            <br></br>
            <Checkbox.Group options={courseLevels} value={selectedCourseLevels} 
                defaultValue={courseLevels} onChange={onChangeLevels} />
            <Checkbox indeterminate={indeterminateLevels} onChange={onChangeCheckAllLevels} 
                checked={checkAllLevels}>Select All</Checkbox>

            <div id="notesContainer" className="flex flex-wrap justify-content-between mt-5">
                {filteredCourses.map((course, key) => {
                    return (
                        <Note course={course} key={key}/>
                    )
                })}
            </div>
            
        </section>
    )
}

export default Notes