import React from 'react'
import Enemy from './Enemy'
import Hero from './Hero'

export default function Arena2(props) {
    return (
        <div>
            <Hero nome='Monkey D. Luffy' img='./image/hero.jpg'/>

            <Enemy nome='Almirante Akainu' img='./image/enemy.png'/>
        </div>
    )
}

/*Já fiz a primeira questão usando props*/