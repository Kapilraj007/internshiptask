import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home (){
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error(error));
  }, []);
  return(
<section id="shows" className="container mt-5">
      <div className="row">
        {shows && shows.map(show => (
          <div className="col-sm-12 col-md-6 col-lg-4 my-3" key={show.show.id}>
            <div className="card p-3 rounded">
              {show.show.image && (
                <img src={show.show.image.medium} alt={show.show.name} />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  <a href={show.show.url} target="_blank" rel="noreferrer">{show.show.name}</a>
                </h5>
                <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner" style={{width: `${show.show.rating.average/ 10 * 100}%` }}></div>
              </div>
              <p id="product_id">{show.show.status}</p>
                  <span id="no_of_reviews">{show.show.rating.average ? `(${show.show.rating.average})` : ''}</span>
                </div>
               <p>{show.show.language}</p>
                <a href={show.show.url} id="view_btn" className="btn btn-info" target="_blank" rel="noreferrer">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}