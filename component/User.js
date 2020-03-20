import React from "react";

const User = props => (
  <div>
    <h1>Name:{props.name}</h1>
    <p>Age: {props.age}</p>
    <style jsx>
      {`
        div {
          border: 2px solid red;
          box-shadow:2px 2px #ccc,
          padding:2px,
          display:flex,
          align-items:center,
          justify-content:center
        }
      `}
    </style>
  </div>
);

export default User;
