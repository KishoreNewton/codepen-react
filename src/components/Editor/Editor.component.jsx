import React, {  useRef, useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/the-matrix.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/tomorrow-night-eighties.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import './Editor.styles.scss'
import  { ReactComponent as Resize } from '../../assets/resize.svg'

function Editor({ title, language, value, onChange, theme }) {

    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    // const options = [
    //     'dracula', 'the-matrix', 'eclipse', 'tomorrow-night-eighties'
    // ]

    const options = [
        { value: 'dracula', label: 'dracula' },
        { value: 'the-matrix', label: 'matrix' },
        { value: 'eclipse', label: 'eclipse' },
        { value: 'tomorrow-night-eighties', label: 'knight' },
        { value: 'cobalt', label: 'cobalt' },
        { value: 'ambiance', label: 'rust' }
    ]

    function changeValue(value) {
        console.log(value.value)
        changeOption(value.value)
    }
    
    const [defaultOption, changeOption] = useState(options[5].value)

    const ref = useRef(theme)

    return (
        <div className={`container ${open ? '' : 'collapsed'}`}>
            <div className="title">
                {open && title}
                <button className="resizebtn" onClick={() => setOpen(!open)}><Resize className="resize" /></button>
                {open && <Dropdown ref={ref} options={options} onChange={changeValue} value={defaultOption} placeholder="Select an option" />}
            </div>
            {open && <ControlledEditor onBeforeChange={handleChange} value={value} className="code" options={{
                lineWrapping: true,
                mode: language,
                lint: true,
                lineNumbers: true,
                theme: defaultOption,
                smartIndent: false,
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                autoCloseTags: true,
                keyMap: 'sublime',
                matchBrackets: true,
                autoCloseBrackets: true,
                extraKeys: {
                  'Ctrl-Space': 'autocomplete'
                }
            }} />}
        </div>
    )
}

export default Editor