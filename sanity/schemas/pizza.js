import topping from "./topping";

export default {
  // Computed name
  name: "pizza",
  // Visible title
  title: "Pizzas",
  icon: () => "🍕",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Pizza name",
      type: "string",
      description: "Name of the pizzas",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxlength: 10,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the pizza in cents",
      validation: Rule => Rule.min(1000),
    },
    {
      name: "toppings",
      title: "Toppings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topping" }] }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      topping0: "toppings.0.name",
      topping1: "toppings.1.name",
      topping2: "toppings.2.name",
      topping3: "toppings.3.name",
    },
    prepare({ title, media, ...toppings }) {
      const toppingsString = Object.values(toppings).filter(Boolean).join(", ");
      return {
        title,
        media,
        subtitle: toppingsString,
      };
    },
  },
};
