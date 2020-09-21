import React, { useRef } from 'react'
import Popup from 'reactjs-popup'
import { ReactComponent as Settings } from '../../assets/add.svg'
import './Add.styles.scss'

function Add() {

    const textInput = useRef(null)

    return (
        <>
          <Popup
                trigger={<Settings height="30" className="saveBtn" />}
                modal
                nested
            >
                {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> 
                        Add JS or Css CDN
                    </div>
                    <div className="content">
                        {' '}
                        <div>
                            <input ref={textInput} type="text" placeholder="Add CDNs" />
                        </div>
                        <button className="saveBtn">Add JavaScript Or Css</button>
                    </div>
                </div>
                )}
            </Popup>
        </>
    )
}

export default Add