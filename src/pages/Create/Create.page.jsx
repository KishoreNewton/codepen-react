import React, { useEffect, useState } from 'react'
import Editor from '../../components/Editor/Editor.component'
import Header from '../../components/Header/Header.component'

function Create(props) {

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')
    const [source, setSource] = useState('')

    const id = props.match.params.id

    function editLocalStorage(id, html, css, js){
        const getValue = JSON.parse(localStorage.getItem('hack')) || []
        console.log(getValue)
        const code = getValue.find(c => c.id === id)
        if(code){
            // console.log(code)
            code.html = html
            code.css = css
            code.js = js
            localStorage.setItem('hack', JSON.stringify(getValue))
        } else {
            // getValue.push({id, html, css, js})
            localStorage.setItem('hack', JSON.stringify([ {id, html, css, js}, ...getValue]))
        }
    }

    useEffect(() => {
        const hack = JSON.parse(localStorage.getItem('hack')) || []
        const hackCode = hack.find(c => c.id === id)
        if(hackCode){
            setHtml(hackCode.html)
            setCss(hackCode.css)
            setJs(hackCode.js)
        } else {
            return
        }
    }, [])

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
        const timeoutLocalStorage = setTimeout(() => {
            editLocalStorage(id, html, css, js)
        }, 500)
        return () => {
            clearTimeout(timeout)
            clearTimeout(timeoutLocalStorage)
        }
    }, [html, css, js, id])

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