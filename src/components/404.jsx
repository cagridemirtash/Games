import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  const imgSource = `https://picsum.photos/id/289/400/300`;
  return (
    <div>
      <img src={imgSource} alt="" />
      <br />
      <br />
      Something Wrong.
      <br />
      <br />
      <br />
      <br />
      <Link to="/">
        <button className="btn btn-danger">Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
