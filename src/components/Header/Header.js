import React from "react";
import { Carousel } from "react-bootstrap";

export default function Header() {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item className="justify-content-center">
          <img
            className="img-fluid rounded-circle"
            src={require("../../assets/img/lacanna.png")}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
