import './App.css'
import "antd/dist/antd.css"
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'

function App() {
    const sectionTitles = ["home", "about", "experience", "projects", "contact", "gallery"]
    return (
        <Router>
            <Navbar texts={sectionTitles}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
