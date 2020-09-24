import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../Image/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
           <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                   <img src={Logo}/> 
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'50px'}}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/home">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
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
                            <Link to="/Login">
                                <button className="btn btn-warning my-2 my-sm-0" type="submit">Login</button>
                            </Link>                    
                        </li>                
                    </ul>                    
                </div>
            </nav>            
        </div>
    );
};

export default Header;