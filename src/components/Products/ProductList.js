import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import Container from "../UI/Container";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3004/products`);
        // console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Container>
      <div className="flex justify-between items-center py-2">
        <div>
          <h1 className="text-4xl font-robotoLight">Product List</h1>
        </div>
        <div>
          <ul className="flex justify-between w-48">
            <li>
              <Button
                onClick={() => {
                  navigate("product-add");
                }}
              >
                Add
              </Button>
            </li>
            <li>
              <Button>Mass Delete</Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-lg border-t-2 border-white-900">
        <ul className="flex flex-wrap gap-10 pt-5">
          {products.map((item) => {
            return (
              <Product key={item.id} item={item} data={products} setData={setProducts} />
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default ProductList;
