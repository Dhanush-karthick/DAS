import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './styles/navigation.css'; // Import your CSS file
import { useState } from 'react';
function Navigation({ onSearch, onFilterRating, onFilterCategory }) {
  const [query, setQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [filter,setFilter]=useState("Filter by rating");
  const [sort,setSort]=useState("Filter by category");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleRatingChange = (rating,str) => {
    onFilterRating(rating);
    setFilter(str);
  };

  const handleCategoryChange = (category) => {
    setSort(category);
    setSelectedCategory(category);
    onFilterCategory(category);
  };

  return (
    <Navbar className='nav' expand="lg" sticky="top">
      <Container>
        <Navbar.Brand id='navText' as={Link} to="/">
          <img
            alt=""
            src="./video.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}Dhanush
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='navText' as={Link} to="/">Home</Nav.Link>
            <Nav.Link id='navText' href="#link">Movies A-Z</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Write a Review</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/signup">Signup</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={filter} id="rating-nav-dropdown">
              <NavDropdown.Item onClick={() => handleRatingChange(0,"Filter by ratings")}>All Ratings</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(1,"1 Star & Up")}>1 Star & Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(2,"2 Stars & Up")}>2 Stars & Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(3,"3 Stars & Up")}>3 Stars & Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(4,"4 Stars & Up")}>4 Stars & Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(5,"5 Stars & Up")}>5 Stars Only</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={sort} id="category-nav-dropdown">
              <NavDropdown.Item className={selectedCategory === 'highestRated' ? 'selected' : ''} onClick={() => handleCategoryChange('Filter by category')}>All movies</NavDropdown.Item>
              <NavDropdown.Item className={selectedCategory === 'highestRated' ? 'selected' : ''} onClick={() => handleCategoryChange('highestRated')}>10 Highest Rated</NavDropdown.Item>
              <NavDropdown.Item className={selectedCategory === 'lowestRated' ? 'selected' : ''} onClick={() => handleCategoryChange('lowestRated')}>10 Lowest Rated</NavDropdown.Item>
              <NavDropdown.Item className={selectedCategory === 'mostRecent' ? 'selected' : ''} onClick={() => handleCategoryChange('mostRecent')}>10 Most Recent</NavDropdown.Item>
              <NavDropdown.Item className={selectedCategory === 'oldest' ? 'selected' : ''} onClick={() => handleCategoryChange('oldest')}>10 Oldest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search movies..."
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={handleInputChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
