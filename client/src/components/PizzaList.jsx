import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Pizza = ({ pizza }) => {
  const {
    name,
    slug,
    toppings,
    image,
  } = pizza;

  const toppingsString = toppings.map(((topping) => topping.name))
    .join(", ");

  return (
    <>
      <Link to={`/pizza/${slug.current}`}>
        <h2>
          <span className="mark">{name}</span>
        </h2>
      </Link>

      <p>
        {toppingsString}
      </p>

      <Img fluid={image.asset.fluid} />
    </>
  );
};

const PizzaList = ({ pizzas }) => {
  return (
    <>
      {pizzas.map((pizza) => (
        <Pizza
          key={pizza.id}
          pizza={pizza}
        />
      ))}
    </>
  );
};

export default PizzaList;
