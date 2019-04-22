import React from 'react'

const Card = ({ robot }) => {
    const { name, email } = robot
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${robot.email}?200x200`} alt='blank'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card