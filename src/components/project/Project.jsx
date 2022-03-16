import React, { useState, Component } from 'react'
import './project.css'

const Project = ({ id, name, image, info, language }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <>
            <div className='col-md-4 mx-auto'>
                <article className='single-project'>
                    <img src={image} alt={name} />
                    <footer>
                        <div className='project-info mt-3'>
                            <h3>{name}</h3>
                        </div>
                        <p>
                            {readMore ? info : ` ${info.substring(0, 200)}...`}
                            <button onClick={() => setReadMore(!readMore)}>
                                {readMore ? 'show less' : '  read more'}
                            </button>
                        </p>
                        <div className='project-lang'>
                            <p>stack</p>
                            {language.map((lang) => {
                                return <span>{lang}</span>
                            })}
                        </div>
                        {/* <button className='delete-btn' onClick={() => removeTour(id)}>
                    view
                </button>
                <button className='delete-btn' onClick={() => removeTour(id)}>
                    code
                </button> */}
                    </footer>
                </article>
            </div>
        </>
    )
}

export default Project
