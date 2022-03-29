import React from "react";
import { Message, Progress } from "semantic-ui-react";

export default function Time() {
  return (
    <>
      <Message color="red">
        <Message.Header>Changes in Service</Message.Header>
        <p>
          We updated our privacy policy here to better service our customers. We
          recommend reviewing the changes.
        </p>
      </Message>
      <Progress percent={44} progress />
    </>
  );
}
