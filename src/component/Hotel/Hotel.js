import React, { useContext } from 'react';
import HotelDetail from '../HotelDetail/HotelDetail';
import Logo from '../../Image/Logo.png';
import './Hotel.css';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';



const Hotel = () => {
    const {placeName} = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const AllHotel = [
        {
            Name:"Light bright airy stylish apt & safe peaceful stay",
            image:"https://cf.bstatic.com/images/hotel/max1024x768/166/166677595.jpg",
            price:"34"
        },
        {
            Name:"Apartment in Lost Panorama",
            image:"https://cf.bstatic.com/images/hotel/max1024x768/100/100140828.jpg",
            price:"52"
        },
        {
            Name:"AR Lounge & Pool(r&r + b&b)",
            image:"https://pix10.agoda.net/hotelImages/6587202/173880577/e1cc45fc9eb9678f9192d751c94e105d.jpg?s=1024x768",
            price:"44"
        }
    ];
    return (        

        <div>
            <div className="container">                
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#FFA900', borderRadius: '10px'}}>
                     <a className="navbar-brand" href="#"><img src={Logo}/></a>                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ml-auto">
                        <li className="nav-item active">
                            <Link to="/home">
                               <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </Link>   
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Destination</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                            <li className="nav-item">
                               <a className="nav-link disabled" href="#">{loggedInUser.name}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <hr/>
                <div className="row">
                    <div className="col-md-7">
                        <p>252 stays Apr 13-17 3 guest</p>                        
                        <h4>Stay in {placeName}</h4>
                        <br/>
                        <div className="HotelCard" style={{position: "relative", right: '20px' }}>
                            {
                                AllHotel.map( eachHotel => <HotelDetail eachHotelValue ={eachHotel}></HotelDetail>)
                            }
                        </div>
                    </div>
                    <div className="col-md-5"></div>
                </div>
            </div>
            
        </div>
    );
};

export default Hotel;