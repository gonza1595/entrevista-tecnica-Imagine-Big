import React, { useState } from "react";
import Card from "../Card/Card";

export default function Cards({ nameSearch, productos, setNameSearch }) {
  const handleSearch = (event) => {
    setNameSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const filteredProducts = productos
    ? productos.filter(
        (product) =>
          product.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
          product.id.toString().includes(nameSearch)
      )
    : [];

  return (
    <div
      className="bg-secondary bg-gradient container mh-100"
      // style={{ height: "100vh" }}
    >
      <div className="container pt-5 pb-3">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control input-text"
                placeholder="Search products...."
                onChange={(event) => handleSearch(event)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary btn-lg"
                  type="button"
                  onClick={() => handleSubmit()}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product) => (
              <div className="col-xl-4 col-lg-4 col-md-3.5 col-sm-12 col-xs-12 p-3">
                <Card
                  img={product.img}
                  name={product.name}
                  id={product.id}
                  price={product.price}
                />
              </div>
            ))}
            <div>
              {filteredProducts.length} product
              {filteredProducts.length > 1 ? "s" : ""} found
            </div>
          </>
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
}
