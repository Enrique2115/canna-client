import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../../components/Header";
import Floatingbutton from "../../components/floartinbutton/floatingbutton";

export default function BasicLayout(props) {
  const { children } = props;

  return (
    <div className="home" style={{
      height:"100vh"
    }}>
      <Header />
      <Container className="content" fluid>{children} </Container>
      <Floatingbutton/>
    </div>
  );
}
