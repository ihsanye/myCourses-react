import React from 'react'

function Course({ course }) {
    const { id, title, price, img, description, link } = course
    return (
        <div className='course'>
            <div>
                <img src={img} width={300}></img>
                <h4>{title}</h4>
                <h5>{description}</h5>
                <h3>{price}</h3>
                <a href={link}>Incele</a>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default Course