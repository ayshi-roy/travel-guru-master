import React from 'react';
import './BookingDetail.css';

const BookingDetail = (props) => {
    const {title,description} = props.booking;

    
    return (
        <div className="design">
           <h2>{title}</h2>
           <p>{description}</p> 
        </div>
    );
};

export default BookingDetail;