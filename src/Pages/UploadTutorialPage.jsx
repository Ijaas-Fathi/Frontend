import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Components/button";
import { Card, CardContent } from "../Components/card";
import { Input } from "../Components/input";
import { Textarea } from "../Components/textarea";
import "bootstrap/dist/css/bootstrap.min.css";

const UploadTutorialPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  // Check if the user is logged in as an instructor
 /* useEffect(() => {
    const role = localStorage.getItem("role");  

    if (role !== "Instructor") {
      alert("Access denied. Only instructors can upload tutorials.");
      navigate("/login"); 
    }
  }, [navigate]);*/

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (file && validImageTypes.includes(file.type)) {
      setCoverImage(file);
    } else {
      alert("Please upload a valid image file (JPEG, PNG, JPG).");
    }
  };

  const handleUpload = () => {
    if (!title || !description || files.length === 0 || !coverImage || !price) {
      alert("Please fill in all fields, select files, and upload a cover image.");
      return;
    }

    alert(
      `Uploading tutorial:\nTitle: ${title}\nDescription: ${description}\nFiles: ${files
        .map((file) => file.name)
        .join(", ")}\nCover Image: ${coverImage.name}\nPrice: $${price}`
    );

    setTitle("");
    setDescription("");
    setFiles([]);
    setCoverImage(null);
    setPrice("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#fff",
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
        <div style={{ backgroundColor: "#E0FFFF" }}>
          <CardContent>
            <h2 style={{ textAlign: "center", marginTop: "3rem" }}>Upload Tutorial</h2>

            {/* Title Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="title"
                style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                Title
              </label>
              <Input
                id="title"
                type="text"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the title of the tutorial"
              />
            </div>

            {/* Description Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="description"
                style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}
              >
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
                placeholder="Give a brief description about your tutorial"
              />
            </div>

            {/* Upload Video Files Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="files"
                style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                Upload Tutorial Videos
              </label>
              <Input
                id="files"
                type="file"
                multiple
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                }}
                onChange={handleFileChange}
              />
            </div>

            {/* Cover Image Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="coverImage"
                style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                Upload Cover Image
              </label>
              <Input
                id="coverImage"
                type="file"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                }}
                onChange={handleCoverImageChange}
              />
            </div>

            {/* Price Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="price"
                style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                Price (in USD)
              </label>
              <Input
                id="price"
                type="number"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price for the tutorial"
              />
            </div>

            {/* Upload Button */}
            <Button
              onClick={handleUpload}
              style={{
                width: "100%",
                padding: "0.75rem",
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
        </div>
      </Card>
    </div>
  );
};

export default UploadTutorialPage;
