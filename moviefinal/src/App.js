import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom

import Navigation from './components/Navigation';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Login from './components/Login'; // Import your Login component
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [filterCategory, setFilterCategory] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterRating = (rating) => {
    setFilterRating(rating);
  };

  const handleFilterCategory = (category) => {
    setFilterCategory(category);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navigation onSearch={handleSearch} onFilterRating={handleFilterRating} onFilterCategory={handleFilterCategory} />
              <Header />
              <header className="App-header">
                <div className='container'>
                  <MovieList searchQuery={searchQuery} filterRating={filterRating} filterCategory={filterCategory} />
                </div>
              </header>
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
