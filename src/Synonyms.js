import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms) {
    return <p>Synonyms: {props.synonyms}</p>;
  } else {
    return null;
  }
}
