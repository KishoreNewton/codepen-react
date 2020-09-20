import React, { useRef, useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/the-matrix.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/tomorrow-night-eighties.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

function Editor({ title, language, value, onChange, theme }) {

    function handleChange(editor, data, value) {
        onChange(value)
    }

    const options = [
        'dracula', 'the-matrix', 'eclipse', 'tomorrow-night-eighties'
    ]

    function changeValue(value) {
        console.log(value.value)
        changeOption(value.value)
    }
    
    const [defaultOption, changeOption] = useState(options[0])

    const ref = useRef(theme)

    return (
        <div className="container">
            <div className="title">
                {title}
                <button>O</button>
                <Dropdown ref={ref} options={options} onChange={changeValue} value={defaultOption} placeholder="Select an option" />
            </div>
            <ControlledEditor onBeforeChange={handleChange} value={value} className="code" options={{
                lineWrapping: true,
                mode: language,
                lint: true,
                lineNumbers: true,
                theme: defaultOption
            }} />
        </div>
    )
}

export default Editor