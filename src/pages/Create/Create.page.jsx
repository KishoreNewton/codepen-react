import React, { useEffect, useState } from 'react'
import Editor from '../../components/Editor/Editor.component'
import Header from '../../components/Header/Header.component'

function Create(props) {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')
    const [source, setSource] = useState('')
    console.log(props.match.params.id)
    console.log(props)

    const id = props.match.params.id

    const webObj = {
        id,
        html,
        js,
        css
    }

    console.log(webObj)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSource(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `)
            const getArray = localStorage.getItem('array') | []
            console.log(getArray)
            // localStorage.setItem(array, JSON.stringify(webObj))
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

export default Create