import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../../components/Header";

export default function BasicLayout(props) {
  const { children } = props;

  return (
    <div className="home" >
      <Header />
      <Container className="content" fluid>{children} </Container>
    </div>
  );
}
