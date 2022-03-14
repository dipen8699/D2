import React from 'react'
import { Footer, Header } from './containers'
import { Navbar, Sidebar } from './components/index'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div>
                <div className='theme_bg bg-pan-left'></div>
                {/* <Sidebar /> */}
                <Navbar />
                <Header />
            </div>
        </div>
    )
}

export default App
