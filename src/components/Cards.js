import React, { useState } from 'react'
import Card from './Card'
import './Cards.css'

export default function Cards() {
    const [cards,] = useState([
        {
            id: 'knskdjf476wedsjdbf',
            title: 'Карточка №1',
            description: 'Lorem ipsum',
            img: 'https://avatarfiles.alphacoders.com/126/thumb-126281.png'
        },
        {
            id: 'qwetun6ydt75rruy',
            title: 'Карточка №2',
            description: 'Lorem ipsum'
        },
        {
            id: 'adfhytt932783tfhsd',
            title: 'Карточка №3',
            description: 'Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni velit molestias libero iste at explicabo quisquam, sapiente sed, exercitationem aut veniam numquam modi qui nobis facere, rerum incidunt debitis animi.',
            img: 'https://avatarfiles.alphacoders.com/147/thumb-147170.jpg'
        },
    ])
    return (
        <ul className='cards'>
            {cards.map(item =>
                <Card card={item} key={item.id}>
                    <img className='cards__img' src={item.img}></img>
                </Card>
            )}

        </ul>
    )
}
