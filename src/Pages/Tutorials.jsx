import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tutorials = () => {
    const tutorials = [
      { id: 1, title: "React Basics" },
      { id: 2, title: "Advanced React" },
      { id: 3, title: "React with TypeScript" },
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Our Tutorials</h1>
            <div className="row">
                {tutorials.map((tutorial) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={tutorial.id}>
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">{tutorial.title}</h5>
                                <p className="card-text">Click to learn more about this tutorial.</p>
                                <Link to={`/tutorials/${tutorial.id}`} className="btn btn-primary">View Tutorial</Link>
                            </div>
                            </div>
                            </div>
                ))}
            </div>
        </div>
    );
};



export default Tutorials;