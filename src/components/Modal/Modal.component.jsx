import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { ReactComponent as Save } from '../../assets/save.svg'
import './Modal.styles.scss'
import Dropdown from 'react-dropdown';

function Modal() {
    const options = ['private', 'public']
    const [defaultOption, setDefaultOption ] = useState(options[1])
    function changeValue(value) {
        setDefaultOption(value)
    }
    return (
        <>
          <Popup
                trigger={<Save height="30" className="saveBtn" />}
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
                        <div>
                            <Dropdown className="dropDown" options={options} onChange={changeValue} value={defaultOption} placeholder="Select an option" />
                            <button className="saveBtn">Online</button>
                        </div>
                        
                    </div>
                </div>
                )}
            </Popup>
        </>
    )
}

export default Modal