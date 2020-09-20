import React, { useState } from 'react'
import Editor from './components/Editor.component'

function App() {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    return (
        <>
            <div className="panel top-panel">
                <Editor language="xml" title="HTML" value={html} onChange={setHtml} />
                <Editor language="css" title="CSS" value={css} onChange={setCss} />
                <Editor language="javascript" title="JS" value={js} onChange={setJs} />
            </div>  
            <div className="bottom-panel">
                <iframe title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
            </div>
        </>
    )
}

export default App