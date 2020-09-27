import React from 'react'

export default function Enemy(props) {
    return [
        <div>
            {props.arena4}
            <br/>
            {props.nome} 
            <img src="/image/enemy.png" alt=""/>
            <br/>
        </div>
    ]
}