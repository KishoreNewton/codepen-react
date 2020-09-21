import React from 'react'
import './ViewHeader.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/code.svg'

function ViewHeader() {
    return (
        <div className="navbar">
            <div className="logo">
                <Logo height="30" />
            </div>
            <div className="signup">
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default ViewHeader


