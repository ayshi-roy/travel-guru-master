import React from 'react';
import './HotelDetail.css';

const HotelDetail = (props) => {
    const {Name,image,price} = props.eachHotelValue;
    return (
        
        <div className="detail">
            <div className="imgPart">
               <img src={image} height="210px" width="210px"/> 
            </div>
            <div className="detailPart">
                <h5>{Name}</h5>
                <p>4 guest 2 bedrooms 2 beds 2 baths</p>                
                <p>Wif Air conditioning Kitchen</p>                
                <p>Cancellation flexibility available</p>                
                <h5>${price}/<span>Night</span></h5>
            </div>
        </div>
    );
};

export default HotelDetail;