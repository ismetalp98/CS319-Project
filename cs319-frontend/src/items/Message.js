import React, { Component } from "react";
import "../csss/groupPage.css";

function Message(props) {
  const isBackgroundRed = props.self == "true" ? true : false;
  return (
    <div
      style={{
        backgroundColor: isBackgroundRed ? "blue" : "green"
      }}
      className="message"
    >
      <div className="messsage_sender">
        <h3> {props.sender}</h3>
      </div>
      <div className="message_text">
        <h3> {props.text}</h3>
      </div>
    </div>
  );
}

export default Message;
