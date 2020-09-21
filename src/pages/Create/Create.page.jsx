import React, { useEffect, useState } from 'react'
import Editor from '../../components/Editor/Editor.component'
import Header from '../../components/Header/Header.component'

function Create() {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')
    const [source, setSource] = useState('')

    window.addEventListener('message', function(response) {
        if (response.data && response.data.source === 'iframe') {
          console.log(response.data.message);
        }
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSource(`
                <html>
                    <script>
                        const _log = console.log;
                        console.log = function (...rest) {
                            window.parent.postMessage({
                                    source: 'iframe',
                                    message: rest,
                                },
                                '*'
                            );
                            _log.apply(console, arguments);
                        }                    
                    </script>
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

export default Create