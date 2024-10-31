// src/App.js
import React from 'react';
import './App.css';
import Home from '../components/Home';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Narike Avenant's Personal Website</h2>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <main>
                <Home />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Narike Avenant. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
