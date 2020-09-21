import React from 'react'
import './Header.styles.scss'
import Modal from '../Modal/Modal.component'
import 'reactjs-popup/dist/index.css'
import { ReactComponent as Logo } from '../../assets/code.svg'
import Add from '../Add/Add.component'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><Logo height="30" /></Link>
            </div>
            <div className="add">
                <Add />
            </div>
            <div className="save">
                <Modal />
            </div>
        </div>
    )
}

export default Header


