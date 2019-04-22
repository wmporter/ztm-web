import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    const cardComponent = robots.map(user => <Card robot={user} />)
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList