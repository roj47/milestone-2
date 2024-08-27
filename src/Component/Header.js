import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Flickr</a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search photos..." aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
