import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Components/button";
import { Card, CardContent } from "../Components/card";
import { Input } from "../Components/input";
import { Textarea } from "../Components/textarea";
import "bootstrap/dist/css/bootstrap.min.css";

const UploadTutorialPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!title || !description || !file) {
      alert("Please fill in all fields and select a file to upload.");
      return;
    }

    // Mock upload logic
    alert(`Uploading tutorial:\nTitle: ${title}\nDescription: ${description}\nFile: ${file.name}`);

    // After upload logic, navigate to another page or clear form
    setTitle("");
    setDescription("");
    setFile(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Card
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
          marginBottom: "1.25rem",
          backgroundColor: "#fff",
          borderRadius: "0.5rem",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <CardContent>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Upload Tutorial</h2>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="title" style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
              Title
            </label>
            <Input
              id="title"
              type="text"
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ced4da", borderRadius: "0.25rem" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter tutorial title"
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="description" style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
              Description
            </label>
            <Textarea
              id="description"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #ced4da",
                borderRadius: "0.25rem",
                minHeight: "100px",
              }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter tutorial description"
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="file" style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
              Upload File
            </label>
            <Input
              id="file"
              type="file"
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ced4da", borderRadius: "0.25rem" }}
              onChange={handleFileChange}
            />
          </div>

          <Button
            onClick={handleUpload}
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#0d6efd",
              color: "#fff",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Upload Tutorial
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadTutorialPage;
