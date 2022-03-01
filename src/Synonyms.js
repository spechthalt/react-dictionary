import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return <p>Synonyms: {props.synonyms}</p>;
  } else {
    return null;
  }
}
