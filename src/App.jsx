import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {
    Navbar,
    Header,
    Footer,
    ProjectList,
    Skills,
    About,
    Contact,
} from './components/index'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <div className='App gredient_bg'>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Header} />
                <Route exact path='/project' component={ProjectList} />
                <Route exact path='/skills' component={Skills} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
