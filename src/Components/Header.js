import React from 'react';

//functional components need to be passed props as an argument to receive them. Place 'props ' as a parameter  to work correctly
const Header = (props) => {
    //console.log(props) to see what you have to work with.
    console.log(props)


    return (
        <header className='main-header'>
            <h1>{props.username} says {props.greeting}</h1>
            <button onClick={props.usernameFn}>Change Username</button>
            {/* Public Classfield Syntax to not use .bind, button example */}
            <button onClick={props.secondUsername}>Change Username Again</button>
        </header>
    )
}

export default Header;