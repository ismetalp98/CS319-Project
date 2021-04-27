import React from "react";
import "../csss/items.css";
import FaceIcon from "@material-ui/icons/Face";

export default function Member(props) {
  return (
    <div className="member">
      <div className="member_image">
        <FaceIcon id="member_icon" />
      </div>
      <div className="member_name">
        <h3> {props.name}</h3>
      </div>
    </div>
  );
}
