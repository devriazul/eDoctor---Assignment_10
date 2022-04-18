import React from "react";
import "./Footer.css";
const date = new Date();
const Footer = () => {
  return (
    <div className="position-relative">
      <footer className="bg-dark text-white py-3 pt-4 ">
        <p className="text-center">
          © {date.getFullYear()} All Right Reserved to E-Doctor. Develop by - {""}
          <a
            href="https://github.com/devriazul"
            className=" text-decoration-none"
            target="_blank"
          >
            DevRiazul.
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
