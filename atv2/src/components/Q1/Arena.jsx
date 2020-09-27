import React from 'react'
import Enemy from './Enemy'
import Hero from './Hero'

export default function Arena(props) {
    return (
        <div>
            <Hero nome='Monkey D. Luffy' img='./image/hero.jpg'/>
            <br/>
            <Enemy nome='Almirante Akainu' img='./image/enemy.png'/>
            <br/>
        </div>
    )
}