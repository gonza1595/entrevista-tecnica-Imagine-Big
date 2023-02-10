import React, { useState } from "react";
import Card from "../Card/Card";

export default function Cards({ nameSearch, productos, setNameSearch }) {
  const [search, setSearch] = useState("");

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
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search by name or id"
            value={nameSearch}
            onChange={handleSearch}
          />
          <button type="submit">Search</button>
        </form>
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
