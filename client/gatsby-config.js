require("dotenv")
  .config({ path: ".env" });
// TODO need check build in esm modules

module.exports = {
  siteMetadata: {
    title: "Hello",
    site_url: "https://slicksslices.gtsb.io",
    description: "The best pizza place in World!",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "tgofggi8",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
