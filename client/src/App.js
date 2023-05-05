import './App.scss'
import 'antd/dist/antd.css'
import '/node_modules/primeflex/primeflex.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ArticleList from './components/ArticleList'
import Gallery from './components/Gallery'
import Article from './components/Article'

function App() {
    const sectionTitles = ["home", "about", "notes", "scores", "article", "gallery"]

    return (
        <>
            <Router>
                <Navbar titles={sectionTitles} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/article" element={<ArticleList />} />
                    <Route path="/article/:title" element={<Article />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </>  
    );
}

export default App;
