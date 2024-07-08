import React from 'react'

function Course({ course }) {
    const { id, title, price, img, description, link } = course
    return (
        <div className='course'>
            <div>
                <img src={img} width={300}></img>
                <h2>{title}</h2>
                <h5 className='course-desc'>{description}</h5>
                <div className='course-detail'>
                    <a href={link}>Incele</a>
                    <h3>{price}</h3>
                </div>

            </div>
        </div>
    )
}

export default Course