import React from 'react'
import skillData from '../data/skills.js'
import { Skill } from './Skill'

export const MainSkills = () => {
    return (
            <main className="main-container textos">
                <h1>My Skills</h1>
                <div className="skills-container">

                    {
                        skillData.map(item => <Skill key={item.id} imgSrc={item.imgSrc} imgAlt={item.imgAlt}/>)
                    }
                
                </div>
            </main> 
    )
}
