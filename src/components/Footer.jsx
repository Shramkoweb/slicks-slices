import React from "react";

const Footer = () => {
  const sinceDate = "2020-11-28T22:37:09.049Z";

  return (
    <footer>
      <p>&copy; Slick's Slices since {new Date(sinceDate).getFullYear()}</p>

      <p>Made with ❤️‍ by - <a href='https://shramko.xyz/' target='_blank' rel="noopener">Serhii Shramko</a></p>
    </footer>
  );
};

export default Footer;
