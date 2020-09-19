import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/the-matrix.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/tomorrow-night-eighties.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor({ title, language, value, onChange, theme }) {

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className="container">
            <div className="title">
                {title}
                <button>O</button>
            </div>
            <ControlledEditor onBeforeChange={handleChange} value={value} className="code" options={{
                lineWrapping: true,
                mode: language,
                lint: true,
                lineNumbers: true,
                theme: theme
            }} />
        </div>
    )
}

export default Editor