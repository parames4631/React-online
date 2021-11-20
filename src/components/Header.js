import React from 'react'

const Header = () => {
    
    let companyName = "TNI"
    const companyAddress = <p>Bangkok</p>
    let number = 10

    const showMassage = () => {
        return companyName + ".com"
    }

    return (
        <div>
            <h1>Hello {showMassage()}</h1>
            <br />
            
        </div>
    )
}

export default Header
