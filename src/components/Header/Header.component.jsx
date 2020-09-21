import React from 'react'
import './Header.styles.scss'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img sr /> */}
                logo
            </div>
            <div className="add">
                Add
            </div>
            <div className="save">
                {/* <img/> */}
                <Popup
                    trigger={<button className="button"> Open Modal </button>}
                    modal
                    nested
                >
                {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> 
                        Save Code
                    </div>
                    <div className="content">
                        {' '}
                        <button className="saveBtn">Offline</button>
                        <button className="saveBtn">Online</button>
                    </div>
                    {/* <div className="actions">
                    <Popup
                        trigger={<button className="button"> Trigger </button>}
                        position="top center"
                        nested
                    >
                        <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                        sapiente! Laudantium, aperiam doloribus. Odit, aut.
                        </span>
                    </Popup>
                    <button
                        className="button"
                        onClick={() => {
                        console.log('modal closed ');
                        close();
                        }}
                    >
                        close modal
                    </button>
                    </div> */}
                </div>
                )}
            </Popup>
            </div>
        </div>
    )
}

export default Header


