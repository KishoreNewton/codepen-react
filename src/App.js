import React, { useEffect, useState } from 'react'
import Editor from './components/Editor/Editor.component'
import Header from './components/Header/Header.component'

function App() {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')
    const [source, setSource] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSource(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `)
        }, 100)
        return () => clearTimeout(timeout)
    }, [html, css, js])

   

    return (
        <>
            <Header />
            <div className="panel top-panel">
                <Editor language="xml" title="HTML" value={html} onChange={setHtml} />
                <Editor language="css" title="CSS" value={css} onChange={setCss} />
                <Editor language="javascript" title="JS" value={js} onChange={setJs} />
            </div>  
            <div className="bottom-panel">
                <iframe srcDoc={source} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
            </div>
        </>
    )
}

export default App