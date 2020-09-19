import React from 'react'
import Editor from './components/Editor.component'

function App() {
    return (
        <>
            <div className="panel top-panel">
                <Editor />
                <Editor />
                <Editor />
            </div>  
            <div className="bottom-panel">
                <iframe title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
            </div>
        </>
    )
}

export default App