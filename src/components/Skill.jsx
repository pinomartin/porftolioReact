import React from 'react'

export const Skill = ({imgSrc,imgAlt}) => {
    return (
        <div class="skill">
            <div class="icon-habilidades">
                <img src={imgSrc} alt={imgAlt}/>
            </div>
        </div>
    )
}
