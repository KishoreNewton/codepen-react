import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.styles.css'
import { ReactComponent as Code } from '../../assets/doc.svg'
import { v4 as uuid } from 'uuid'

function Card() {
    const uniqueId = uuid()
    const [offline, setOffline] = useState([])
    
    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('hack')) || []
        setOffline(local)
    }, [])

    const cardTemplate = offline.map((code) => {
        console.log(code)
        return(
            <Link to={`create/${code.id}`} key={code.id}>
                <article className="card">
                    <header className="card-header">
                        <p>May 25th 2020</p>
                        <h2>Card</h2>
                    </header>
                    <div className="card-author">
                        <span className="author-avatar">
                            <img src="avatar.jpg" />
                        </span>
                        <svg className="half-circle" viewBox="0 0 106 57">
                            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                        </svg>
                        <div className="author-name">
                            <div className="author-name-prefix">Author</div>
                            No Names
                        </div>
                    </div>
                </article>
            </Link>
        )
    })

    return (
        <section className="card-list">
        <Link to={`/create/${uniqueId}`}>
            <article className="card create">
                <header className="card-header">
                    <p>Now</p>
                    <h2>Create New</h2>
                </header>
                <div className="card-author">
                    <Code />
                </div>
            </article>
        </Link>
        {cardTemplate}
    </section>
    )
}

export default Card