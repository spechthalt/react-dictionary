import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos row">
        {props.photos.map(function (photo, index) {
          return (
            <span className="col-3" key={index}>
              <a
                href={photo.src.original}
                rel="noreferrer"
                target="_blank"
                alt=" "
              >
                <img src={photo.src.landscape} className="img-fluid" />
              </a>
            </span>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
