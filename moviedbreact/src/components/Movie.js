import React from "react";

const Movie = (props) => {
  const ImageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;
  const DefaultImageURL = "https://picsum.photos/200/300";
  const MovieTitle = props.data.title;
  const MovieReleaseDate = props.data.release_date;

  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {props.data.poster_path == null ? (
              <img
                src={DefaultImageURL}
                alt=""
                style={{ width: "100", height: "200" }}
              />
            ) : (
              <img src={ImageURL} style={{ width: "100", height: "200" }} />
            )}

            <span className="card-title">{MovieTitle}</span>
          </div>
          <div className="card-content">
            <p>{MovieReleaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
