import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} style={{ padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "0.25rem", cursor: "pointer" }}>
      {children}
    </button>
  );
};
