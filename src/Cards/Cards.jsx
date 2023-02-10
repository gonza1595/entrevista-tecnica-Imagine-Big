import React, { useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards({ nameSearch, productos, setNameSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setNameSearch(event.target.value);
    setSearchTerm("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setSearchTerm(nameSearch);
    }, 3000);
  };

  const filteredProducts = nameSearch
    ? productos.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.id.toString().includes(searchTerm)
      )
    : productos;

  return (
    <div className="bg-secondary bg-gradient container pt-5 ">
      <div className="container pt-5 pb-3">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control input-text"
                placeholder="Buscar productos...."
                value={nameSearch}
                onChange={(event) => handleSearch(event)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary btn-lg"
                  type="button"
                  onClick={(event) => handleSubmit(event)}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 ">
          {filteredProducts.length > 0 ? (
            <>
              <div className="row ">
                {filteredProducts.map((product) => (
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3.5 col-sm-12 col-xs-12 p-5">
                    <Card
                      img={product.img}
                      name={product.name}
                      id={product.id}
                      price={product.price}
                    />
                  </div>
                ))}
              </div>
              <hr className=" hr hr-blurry p-1 " />
              <div className="fw-bold text-center">
                {filteredProducts.length > 1
                  ? `${filteredProducts.length} productos encontrados`
                  : `${filteredProducts.length} producto encontrado`}
              </div>
            </>
          ) : (
            <div className="text-center">No se encontraron productos</div>
          )}
        </div>
      </div>
    </div>
  );
}
