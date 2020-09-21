import React from 'react'
import './Header.styles.scss'

function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img sr /> */}
                Code
            </div>
            <div className="add">
                Add
            </div>
            <div className="save">
                {/* <img/> */}
                Save
            </div>
        </div>
    )
}

export default Header