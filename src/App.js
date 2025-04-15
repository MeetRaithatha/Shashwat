import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import SustainabilityPage from './components/SustainabilityPage/SustainabilityPage';
import AboutPage from './components/AboutPage/AboutPage';
import CaseStudiesPage from './components/CaseStudiesPage/CaseStudiesPage';
import BlogPage from './components/BlogPage/BlogPage';
import CarbonCalculator from './components/CarbonCalculator/CarbonCalculator';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/carbon-calculator" element={<CarbonCalculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
