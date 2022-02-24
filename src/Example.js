import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <p>
        Example: <em>{props.example}</em>
      </p>
    );
  } else {
    return null;
  }
}
