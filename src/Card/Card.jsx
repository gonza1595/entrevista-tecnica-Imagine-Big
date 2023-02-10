import React from "react";

export default function Card({ img, name, id, price }) {
  return (
    <div
      className="card mb-4 border border-white text-center "
      style={{ width: "100%", height: "100%" }}
    >
      <div className="row g-0">
        <div className="col-xs-4">
          <img
            src={img}
            className="card-img-fluid "
            style={{ width: "100%", height: "300px" }}
            alt="..."
          />
        </div>
        <div className="col-xs-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="text-muted">{id}</p>
            <p className="card-text position-absolute bottom-0 start-50 translate-middle-x">
              <small className="fw-bold fs-2 ">$ {price}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
