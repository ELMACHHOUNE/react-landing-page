import React from "react";

const Footer = () => (
  <footer className="py-4 bg-[#1B3C53] text-[#F9F3EF] text-center">
    <span className="text-[#D2C1B6]">&copy; {new Date().getFullYear()}</span>{" "}
    BusinessApp. All rights reserved.
  </footer>
);

export default Footer;
