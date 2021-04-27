import React from "react";
import "../csss/items.css";
import { Link } from "react-router-dom";

export default function PollItem(props) {
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
        </div>
        <h3 id="votecount"> {props.count}</h3>
      </Link>
    </div>
  );
}
