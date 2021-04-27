import React from "react";
import "../csss/items.css";
import { Link } from "react-router-dom";

function asd() {
  console.log("asd");
}

export default function GroupItem(props) {
  const name =
    props.color % 4 == 0
      ? "poll_item"
      : props.color % 4 == 1
      ? "poll_item1"
      : props.color % 4 == 2
      ? "poll_item2"
      : "poll_item1";
  return (
    <div className={name}>
      <Link id="linkGroup" to="/register">
        <div className="poll_item_name">
          <h3 id="group_name"> {props.name}</h3>
          <h3 id="group_name"> {props.project}</h3>
        </div>
        <h3 id="memcount"> 5/5 </h3>
      </Link>
    </div>
  );
}
