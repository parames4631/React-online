
import React from 'react'
import useHover from '../hooks/useHover'
const Menu = () => {

    const [hover, setHover] = React.useState()

    const MouseOver = () => {
        setHover(true)
    }
    const mouseout = () => {
        setHover(false)
    }
    
    return (
        <div>
            <h1>Menu</h1>
            {
                hover ? <h3>Welcome</h3> : null
            }
            <img onMouseOver={MouseOver} onMouseOut={mouseout} src = "./logo192.png" alt="logo"/>
        </div>
    )
}

export default Menu
