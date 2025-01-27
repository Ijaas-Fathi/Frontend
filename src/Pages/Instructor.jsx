import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const instructorData = {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        bio: 'John is a seasoned instructor with over 10 years of experience in teaching web development and programming.',
        rating: 4.5,
};

const Instructor = () => {
    const cardStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
     };

     const titleStyle = {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        textAlign: 'center',
     };

     const emailStyle = {
        color: '#6c757d',
        textAlign: 'center',
    };

    const bioStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        marginTop: '15px',
    };

    const ratingStyle = {
        textAlign: 'center',
        marginTop: '10px',
    };

    const starStyle = {
        color: '#ffc107',
        fontSize: '1.5rem',
        margin: '0 2px',
    };


    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="fas fa-star" style={starStyle}></i>);
        }

        if (halfStar) {
            stars.push(<i key={fullStars} className="fas fa-star-half-alt" style={starStyle}></i>);
        }

        while (stars.length < 5) {
            stars.push(<i key={stars.length} className="far fa-star" style={starStyle}></i>);
        }

        return stars;
    };

    return (
        <div className='container mt-5'>
            <div className='card' style={cardStyle}>
                <div className='card-body' style={{marginTop: '30px'}}>
                    <h2 className='card-title' style={titleStyle}>
                        {instructorData.firstname} {instructorData.lastname}
                    </h2>
                    <p style={emailStyle}>{instructorData.email} </p>
                    <hr />
                    <p className='card-text' style={bioStyle}>{instructorData.bio} </p>
                    <div style={ratingStyle}>
                    {renderStars(instructorData.rating)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor