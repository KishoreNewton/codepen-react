import React from 'react'
import './View.styles.scss'
import ViewHeader from '../../components/ViewHeader/ViewHeader.component'
import Card from '../../components/Card/Card.component'

function View() {
    return (
        <div className="page">
            <ViewHeader />
            <Card />
        </div>  
    )
}

export default View