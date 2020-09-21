import React from 'react'
import './ViewHeader.styles.scss'
import { Link } from 'react-router-dom'

function ViewHeader() {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img sr /> */}
                logo
            </div>
            <div className="signup">
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default ViewHeader


