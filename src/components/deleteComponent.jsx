import React from "react";

function Delete({ id, handleClick }) {
  return (
    <button
      className="btn btn-sm btn-danger"
      style={{ padding: "5px" }}
      onClick={(e) => handleClick(id)}
    >
      Delete
    </button>
  );
}

export default Delete;
