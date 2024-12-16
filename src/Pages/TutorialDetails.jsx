import React from "react";
import { useParams } from "react-router-dom";
import reactBasic from '../assets/Images/reactBasic.png';
import advReact from '../assets/Images/advReact.png';
import tsReact from '../assets/Images/tsReact.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const TutorialDetails = () => {
    const { id } = useParams();

    const tutorialData = {
        1: {
            title: "React Basics",
            description: "This is a beginner's guide to React. Learn how to build dynamic, single-page web applications with React, a popular JavaScript library. From component creation to state management, this course covers all the fundamentals.",
            instructor: "John Doe",
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
        };
      
        const tutorial = tutorialData[id];

        return (
            <div className="container py-5">
                <h1 className="text-center mb-4">Tutorial Details</h1>
                {tutorial ? (
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={tutorial.image} alt={`${tutorial.title} thumbnail`} className="img-fluid rounded shadow-lg" />
                        </div>
                        <div className="col-lg-8 col-md-6">
                        <h2>{tutorial.title}</h2>
                            <p><strong>Instructor:</strong> {tutorial.instructor}</p>
                            <p><strong>Duration:</strong> {tutorial.duration}</p>
                            <p><strong>Payment:</strong> {tutorial.payment}</p>
                            <p>{tutorial.description}</p>

                            <h3 className="mt-4">Course Curriculum</h3>
                            <ul className="list-group">
                                {tutorial.curriculum.map((item, index) => (
                                    <li key={index} className="list-group-item">{item}</li>
                                ))}
                            </ul>
                            <div className="cta-section mt-4">
                                <button className="btn btn-primary btn-lg">Enroll Now</button>
                            </div>
                        </div>
                        </div>
                ):(
                    <p className="text-center text-danger">Tutorial not found.</p>

                )}
                </div>
                );
            };
            
            export default TutorialDetails;
