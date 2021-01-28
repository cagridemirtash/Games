import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  const imgSource = `https://picsum.photos/id/289/400/300`;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={imgSource} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hop Hemşerim</h5>
              <p className="card-text">Sen nereye geldiğini bilmiyorsun</p>
              <button className="btn btn-success">
                {" "}
                <Link to="/">Geri bas lan</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
