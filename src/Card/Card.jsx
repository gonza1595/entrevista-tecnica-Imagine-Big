import React from "react";

export default function Card({ img, name, id, price }) {
  return (
    <div className="card mb-3" style={{ width: "500px", height: "180px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="text-muted">{id}</p>
            <p className="card-text">
              <small className="fw-bold fs-4">$ {price}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
