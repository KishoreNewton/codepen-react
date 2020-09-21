import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Editor from './components/Editor/Editor.component'
import Header from './components/Header/Header.component'
// import Create from './pages/Create/Create.page'
import Create from './pages/Create/Create.page'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/create" component={Create} />
            </Switch>
        </Router>
    )
}

export default App