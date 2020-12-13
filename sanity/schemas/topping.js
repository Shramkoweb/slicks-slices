import React from "react";

export default {
  // Computed name
  name: "topping",
  // Visible title
  title: "Toppings",
  icon: () => "🌶",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Topping name",
      type: "string",
      description: "Name of the topping",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      description: "Is Vegetarian?",
    },
  ],
  preview: {
    select: {
      name: "name",
      vegetarian: "vegetarian",
    },
    prepare({ name, vegetarian }) {
      return {
        title: name,
        media: <span>{vegetarian ? "🥦" : "🍗"}</span>,
      };
    },
  },
};
