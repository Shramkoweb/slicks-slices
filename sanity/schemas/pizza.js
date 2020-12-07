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
  ],
};
