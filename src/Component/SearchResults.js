import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="container mt-4">
      <h2>Search Results</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {results.map(result => (
          <div key={result.id} className="col">
            <div className="card">
              <img src={result.imageUrl} className="card-img-top" alt={result.title} />
              <div className="card-body">
                <p className="card-text">{result.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
