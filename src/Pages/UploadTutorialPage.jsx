import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Components/button";
import { Card, CardContent } from "../Components/card";
import { Input } from "../Components/input";
import { Textarea } from "../Components/textarea";
import "bootstrap/dist/css/bootstrap.min.css";
import upload from "../assets/Images/upload.png";
import { motion } from "framer-motion";

const UploadTutorialPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleUpload = async () => {
    if (!title || !description || files.length === 0 || !coverImage || !price) {
      alert("Please fill in all fields, select files, and upload a cover image.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    files.forEach((file) => formData.append("videoFile", file));
    formData.append("coverImage", coverImage);

    try {
      const response = await fetch("http://localhost:8080/api/videos/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload tutorial.");
      }

      const data = await response.json();
      alert("Tutorial uploaded successfully!");
      console.log("Uploaded Tutorial:", data);

      setTitle("");
      setDescription("");
      setFiles([]);
      setCoverImage(null);
      setPrice("");
    } catch (error) {
      console.error("Error uploading tutorial:", error);
      alert("An error occurred while uploading the tutorial.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 120px)",
        padding: "20px",
        backgroundColor: "#ebebeb",
        overflow: "auto",
        marginTop: "30px",
      }}
    >
      {/* Left Side - Image */}
      <motion.div style={{ flex: 1, textAlign: "center" }} whileHover={{ scale: 1.1 }}>
        <img
          src={upload}
          alt="Tutorial"
          style={{
            width: "90%",
            borderRadius: "10px",
            boxShadow: "6px 6px 10px rgba(0,0,0,0.2)",
          }}
        />
      </motion.div>

      {/* Right Side - Form */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", opacity: 0.7 }}>
        <Card
          style={{
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            padding: "2rem",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "10px",
            maxWidth: "500px",
            width: "100%",
            opacity: "0.8",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <CardContent>
            <h2 style={{ textAlign: "center", color: "#2E8A99", marginBottom: "1.5rem" }}>
              Upload Tutorial
            </h2>

            {/* Title Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="title" style={labelStyle}>
                Title
              </label>
              <Input
                id="title"
                type="text"
                style={inputStyle}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the title of the tutorial"
              />
            </div>

            {/* Description Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="description" style={labelStyle}>
                Description
              </label>
              <Textarea
                id="description"
                style={inputStyle}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Give a brief description about your tutorial"
              />
            </div>

            {/* Upload Video Files Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="files" style={labelStyle}>
                Upload Tutorial Videos
              </label>
              <Input
                id="files"
                type="file"
                multiple
                style={inputStyle}
                onChange={handleFileChange}
                name="videoFile"
              />
            </div>

            {/* Cover Image Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="coverImage" style={labelStyle}>
                Upload Cover Image
              </label>
              <Input
                id="coverImage"
                type="file"
                style={inputStyle}
                onChange={handleCoverImageChange}
                name="coverImage"
              />
            </div>

            {/* Price Field */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="price" style={labelStyle}>
                Price (in USD)
              </label>
              <Input
                id="price"
                type="number"
                style={inputStyle}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price for the tutorial"
              />
            </div>

            {/* Upload Button */}
            <Button
              onClick={handleUpload}
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: isLoading ? "#ccc" : "#1F6E8C",
                color: "white",
                border: "5px",
                borderRadius: "5px",
                cursor: isLoading ? "not-allowed" : "pointer",
                marginTop: "1rem",
                fontWeight: "bold",
              }}
            >
              {isLoading ? "Uploading..." : "Upload Tutorial"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  border: "1px solid #ced4da",
  borderRadius: "0.25rem",
};

const labelStyle = {
  fontWeight: "bold",
  color: "#2E8A99",
};

export default UploadTutorialPage;