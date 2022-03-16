import React, { useState } from 'react'
import './project.css'
import Project from './Project'
import Projects from '../../Data'

const ProjectList = () => {
    return (
        <section id='projetc-list' className='d-flex align-item-center'>
            <div className='container'>
                <div className='title'>
                    <h2>Welconme to my project world</h2>
                    <div className='underline'></div>
                </div>
                <div className='row ml-3'>
                    {Projects.map((pro) => {
                        return <Project key={pro.id} {...pro} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProjectList
