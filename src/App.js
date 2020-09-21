import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import View from './pages/View/View.page'
import Create from './pages/Create/Create.page'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={View} />
                <Route exact path="/create/:id" component={Create} />
            </Switch>
        </Router>
    )
}

export default App