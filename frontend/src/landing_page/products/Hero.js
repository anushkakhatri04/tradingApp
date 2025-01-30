import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center mt-5 p-3 mb-5">
      <h1>Technology</h1>
      <h3 className="mt-4 text-muted fs-4">Sleek, modern, and intuitive trading platforms</h3>
      <p className="my-4">
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings <i className="fa-solid fa-arrow-right"></i>
        </a>{" "}
      </p>
      </div>
    </div>
  );
}

export default Hero;
