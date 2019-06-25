import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    const cardComponent = robots.map(user => <Card key={user.id} robot={user} />)
    throw new Error('error')
    
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList