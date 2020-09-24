import React, {useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import FakeData from '../FakeData/FakeData';
import PlaceCard from '../PlaceCard/PlaceCard';
import {} from '../../App';

const Home = () => { 

    const [placeValue, setPlaceValue] = useState(FakeData);
    
    return (
        <div className="home-part">                        
           <Header></Header> 
           <div className='mapping'>               
                   {
                       placeValue.map(place => <PlaceCard place={place}></PlaceCard>)
                   }                              
           </div>

        </div>
    );
};

export default Home;