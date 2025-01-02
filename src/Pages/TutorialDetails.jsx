import React from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import reactBasic from '../assets/Images/reactBasic.png';
import advReact from '../assets/Images/advReact.png';
import tsReact from '../assets/Images/tsReact.png';
import ent from '../assets/Images/enterpreneur.png';
import fin from '../assets/Images/finance.png';
import ml from '../assets/Images/machine.png';
import cyber from "../assets/Images/cyber.png";
import graphic from "../assets/Images/graphic.png";
import digital from "../assets/Images/digital.png";
import yoga from "../assets/Images/yoga.png";
import strength from "../assets/Images/strength.png";

const TutorialDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 

    const handleEnrollClick = () => {
      navigate('/enrollment'); 
    };

    const tutorialData = {
        1: {
            title: "React Basics",
            description: "This is a beginner's guide to React. Learn how to build dynamic, single-page web applications with React, a popular JavaScript library. From component creation to state management, this course covers all the fundamentals.",
            instructor: "John Doe",
            duration: "3 hours",
            payment: "$300",
            image: reactBasic,
            curriculum: ["Introduction to React", "JSX Basics", "Components & Props", "State Management", "Event Handling", "React Router Basics"],
        },
        2: {
            title: "Advanced React",
            description: "Dive deep into advanced React concepts such as Context API, Hooks, optimization techniques, and more. This course is designed for developers who are familiar with React and want to level up their skills.",
            instructor: "Jane Smith",
            duration: "3 hours",
            payment: "$450",
            image: advReact,
            curriculum: ["React Hooks", "Context API", "Performance Optimization", "Code Splitting", "Testing in React"],
          },
          3: {
            title: "React with TypeScript",
            description: "Master how to use TypeScript with React to build more robust, scalable web applications. This course covers how TypeScript integrates with React's core features and best practices for using TypeScript effectively in React.",
            instructor: "Sarah Johnson",
            duration: "4 hours",      
            payment: "$500",
            image: tsReact,
            curriculum: ["Introduction to TypeScript", "TypeScript with React", "Using Props & State in TypeScript", "TypeScript with Redux", "Testing TypeScript in React"],
          },
          
            4: {
              title: "Entrepreneurship 101",
              description:
                "Learn the essentials of starting and managing your own business. This course covers market research, business planning, and effective marketing strategies for aspiring entrepreneurs.",
              instructor: "Alice Brown",
              duration: "5 hours",
              payment: "$400",
              image: ent,
              curriculum: [
                "Introduction to Entrepreneurship",
                "Market Research Basics",
                "Crafting a Business Plan",
                "Marketing & Sales Strategies",
                "Scaling Your Business",
              ],
            },
            5: {
              title: "Financial Management for Businesses",
              description:
                "Master the art of managing your business finances. This course covers budgeting, cash flow management, and investment strategies to ensure financial stability and growth.",
              instructor: "Mark Johnson",
              duration: "4 hours",
              payment: "$350",
              image: fin,
              curriculum: [
                "Understanding Financial Statements",
                "Budgeting for Growth",
                "Cash Flow Management",
                "Investment Strategies",
                "Risk Management",
              ],
            },
          
            6: {
              title: "Machine Learning Basics",
              description:
                "An introductory course on machine learning concepts, algorithms, and practical applications. Build predictive models and understand the power of AI.",
              instructor: "Emily White",
              duration: "6 hours",
              payment: "$500",
              image: ml,
              curriculum: [
                "Introduction to Machine Learning",
                "Supervised Learning",
                "Unsupervised Learning",
                "Model Evaluation",
                "Applications of Machine Learning",
              ],
            },
            7: {
              title: "Cybersecurity Essentials",
              description:
                "Understand the principles of cybersecurity to protect systems and data. Learn about threats, vulnerabilities, and preventive measures.",
              instructor: "James Anderson",
              duration: "5 hours",
              payment: "$450",
              image: cyber,
              curriculum: [
                "Introduction to Cybersecurity",
                "Common Threats and Vulnerabilities",
                "Network Security Basics",
                "Data Protection Best Practices",
                "Incident Response",
              ],
            },         
            8: {
              title: "Graphic Design Fundamentals",
              description:
                "Explore the principles of graphic design, including typography, color theory, and composition. Create visually appealing designs using popular tools.",
              instructor: "Sophia Green",
              duration: "4 hours",
              payment: "$300",
              image: graphic,
              curriculum: [
                "Understanding Typography",
                "Color Theory Basics",
                "Composition & Layout",
                "Using Adobe Illustrator",
                "Creating a Portfolio",
              ],
            },
            9: {
              title: "Digital Illustration Masterclass",
              description:
                "Learn to create stunning digital illustrations using advanced techniques. This course covers drawing, shading, and adding depth to your art.",
              instructor: "Daniel Scott",
              duration: "5 hours",
              payment: "$400",
              image: digital,
              curriculum: [
                "Introduction to Digital Tools",
                "Sketching and Outlines",
                "Shading Techniques",
                "Coloring and Highlights",
                "Finalizing Digital Art",
              ],
            },
        
            10: {
              title: "Yoga for Beginners",
              description:
                "A step-by-step guide to starting your yoga journey. Learn foundational poses, breathing techniques, and mindfulness practices for better health.",
              instructor: "Anna Lee",
              duration: "3 hours",
              payment: "$200",
              image: yoga,
              curriculum: [
                "Introduction to Yoga",
                "Basic Yoga Poses",
                "Breathing Techniques",
                "Mindfulness Practices",
                "Daily Yoga Routines",
              ],
            },
        11: {
              title: "Strength Training Essentials",
              description:
                "Build strength and endurance with this beginner's guide to strength training. Learn proper form, effective exercises, and fitness tips.",
              instructor: "Michael Davis",
              duration: "4 hours",
              payment: "$250",
              image: strength,
              curriculum: [
                "Understanding Strength Training",
                "Basic Lifting Techniques",
                "Core Strength Exercises",
                "Building a Workout Plan",
                "Nutrition for Strength",
              ],
            },
          };
      
        const tutorial = tutorialData[id];

        return (
            <div className="container py-5">
              <h1 className="container-fluid display-4 text-center fw-bold text-gradient">
                Tutorial Details
              </h1>
              {tutorial ? (
                <div className="mt-5">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <img
                        src={tutorial.image}
                        alt={`${tutorial.title} thumbnail`}
                        className="img-fluid rounded shadow-lg"
                        style={{
                          border: "6px solid",
                          borderImageSlice: 2,
                          borderImageSource: "linear-gradient(to right, #4facfe,rgb(31, 69, 71))",
                        }}
                      />
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <h2
                        style={{
                          background: "linear-gradient(to right, #ff6a00, #ee0979)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {tutorial.title}
                      </h2>
                      <p>
                        <strong>Instructor:</strong><a href="/Instructor" > {tutorial.instructor} </a>
                      </p>
                      <p>
                        <strong>Duration:</strong> {tutorial.duration}
                      </p>
                      <p>
                        <strong>Payment:</strong> {tutorial.payment}
                      </p>
                      <p>{tutorial.description}</p>
                      <h3
                        style={{
                          background: "linear-gradient(to right, #43e97b, #38f9d7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="mt-4"
                      >
                        Course Curriculum
                      </h3>
                      <ul className="list-group">
                        {tutorial.curriculum.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item"
                            style={{
                              background: "linear-gradient(to right, #ff9a9e, #fecfef)",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="cta-section mt-4">
                        <button
                          className="btn btn-lg"
                          style={{
                            background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                            color: "#fff",
                            border: "none",
                          }}
                          onClick={handleEnrollClick} // Navigate when clicked
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-center text-danger">Tutorial not found.</p>
              )}
            </div>
          );
          
            };
            
            export default TutorialDetails;
