import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
const TinderCards = () => {
    const [people, setPeople] = useState([
        {name:'Elon Musk', imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0U3aRHdTqIDE-ss2izzf3Rjx5OuwmqpDRcEZs7TQY9JNrJb-5hHz0in8bXyxOlQcvvI&usqp=CAU'},
        {name:'Ratan Tata', imgUrl:'https://images.livemint.com/img/2021/10/08/1600x900/Ratan-Tata-kACG--621x414@LiveMint_1633691650782.JPG'},
        {name:'A.P.J. Abdul Kalam', imgUrl:'https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/APJ%20ABDUL%20KALAM-2056355313-1564209285.jpg'},
    ])


    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
  return (
    <div className='tinderCards'>
    <div className="tinderCards__container">
        {people.map(person => (
            <TinderCard
                className='swipe' 
                key={person.name}
                onSwipe={onSwipe} 
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                preventSwipe={['up', 'down']}
            >
                <div style={{ backgroundImage: `url(${person.imgUrl})`}}className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
    </div>
</div>
  )
}

export default TinderCards