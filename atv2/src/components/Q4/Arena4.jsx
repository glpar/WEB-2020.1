import React from 'react'

    export default function Arena4(props) {
        return (
        <div>
            {React.Children.map(props.children, arena4 => {
                return React.cloneElement(arena4, {...props });
            })}
        </div>
        )

    }
/*
<World>
  <Arena arena="Castelão">
       <Hero name="Sicrano de Tal" img="hero.jpg">
        <Enemy name="Fulano de Tal" img="enemy.png">
  </Arena>
   <Arena arena="Castelão">
       <Hero name="Sicrano de Tal" img="hero.jpg">
        <Enemy name="Fulano de Tal" img="enemy.png">
  </Arena>
  <Arena arena="Castelão">
       <Hero name="Sicrano de Tal" img="hero.jpg">
        <Enemy name="Fulano de Tal" img="enemy.png">
  </Arena>
</World>
*/ 