import React from "react";

export const Card = ({ children, ...props }) => {
  return (
    <div {...props} style={{ border: "1px solid #ddd", borderRadius: "0.5rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, ...props }) => {
  return <div {...props} style={{ padding: "1rem" }}>{children}</div>;
};
