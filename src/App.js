// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPost';
import './App.css'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/blog"  element={<BlogPostList/>} />
        <Route path="/blog/:id" element={<BlogPost/>} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;

