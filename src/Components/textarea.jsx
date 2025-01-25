import React from "react";

export const Textarea = (props) => {
  return <textarea {...props} style={{ padding: "0.5rem", border: "1px solid #ced4da", borderRadius: "0.25rem", width: "100%", minHeight: "100px" }} />;
};
