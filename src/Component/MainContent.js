import React from 'react';

const MainContent = () => {
  // imput photos
  const photos = [
    { id: 1, title: 'Photo 1', imageUrl: 'photo1.jpg' },
    { id: 2, title: 'Photo 2', imageUrl: 'photo2.jpg' },
    // Add more photos as needed
  ];

  return (
    <div className="container mt-4">
      <h2>Latest Photos</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {photos.map(photo => (
          <div key={photo.id} className="col">
            <div className="card">
              <img src={photo.imageUrl} className="card-img-top" alt={photo.title} />
              <div className="card-body">
                <p className="card-text">{photo.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
