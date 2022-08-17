import React from 'react'

export default function Card(props) {

    return (
        <li className='cards__item'>
            {props.card.img ? props.children : false}
            <h2 className='cards__title'>{props.card.title}</h2>
            <p className='cards__desc'>{props.card.description}</p>
            <button className='cards__button'>Перейти</button>
        </li>
    )
}
