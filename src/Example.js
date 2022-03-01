import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <p className="Example">
        Ex. <em>{props.example}</em>
      </p>
    );
  } else {
    return null;
  }
}
