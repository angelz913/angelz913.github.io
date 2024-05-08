import './App.scss'
import 'antd/dist/antd.css'
import '/node_modules/primeflex/primeflex.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Home from './components/Home'
import Navbar from './components/Navbar'
import NotesSection from './components/NotesSection'
import ScoresSection from './components/ScoreSection'
import ArticleList from './components/ArticleList'
import Gallery from './components/Gallery'
import Article from './components/Article'

function App() {
    const sectionTitles = ["home", "experience", "notes", "scores", "gallery"]

    return (
        <>
            <Helmet>
                <title>Angel Zhang</title>
            </Helmet>
            <Router>
                <Navbar titles={sectionTitles} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/notes" element={<NotesSection />} />
                    <Route path="/scores" element={<ScoresSection />} />
                    <Route path="/gallery" element={<Gallery />} />
                    {/* <Route path="/articles" element={<ArticleList />} />
                    <Route path="/articles/:title" element={<Article />} /> */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </>  
    );
}

export default App;
