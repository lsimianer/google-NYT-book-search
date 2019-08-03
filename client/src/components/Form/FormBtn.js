import React from "react";
import "../List/List.css";


export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-info">
    {props.children}
  </button>
);
