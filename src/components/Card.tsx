import React from 'react'

const Card = () => {
    const cardTextSource = [
        {
            id: 45,
            textPlace: "Club in downtown Belgrade, where rich people go test text test text one two three",
            textDificulty: "You have only 5 euros in your pocket, random text to be rendered test text test text one two three"
        },
        {
            id: 46,
            textPlace: "The Club in downtown Belgrade, where rich people go test text test text one two three",
            textDificulty: "Ok, 2222 You have only 5 euros in your pocket, just testing the MAX of the space random text to be rendered test text test text one two three"
        }
    ]

    return (
        <div className='middle-section'>
            <div className="card_front">
                {cardTextSource[1].textPlace}
            </div>
            <div className="card_front">
                {cardTextSource[1].textDificulty}
            </div>
        </div>
    )
}

export default Card
