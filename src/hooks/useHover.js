import React from "react";


function useHover () {
    const [hover, setHover] = React.useState()

    const MouseOver = () => {
        setHover(true)
    }
    const mouseOut = () => {
        setHover(false)
    }


    return [hover, MouseOver, mouseOut]
}

export default useHover