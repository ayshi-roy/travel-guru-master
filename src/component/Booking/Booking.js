import React, { useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BookingDetail from '../BookingDetail/BookingDetail';
import Header from '../Header/Header';
import '../Home/Home.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FakeData from '../FakeData/FakeData';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 170,
  },
}));

const Booking = () => {
    const classes = useStyles();

    const history = useHistory();
    const {placeName} = useParams();

    const [placeValue, setPlaceValue] = useState(FakeData);

    const [bookingValue, setBookingValue] = useState([]);
    useEffect(()=>{
        const matchValue = placeValue.filter(place => place.title.toLowerCase() === placeName.toLowerCase()); 
        setBookingValue(matchValue);
    },[placeName]);

    const submitHandler = () => {
        history.push(`/Hotel/${placeName}`) 
    }
    
    
    
    return (
        <div className="home-part">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {
                          bookingValue.map( pl => <BookingDetail booking = {pl}></BookingDetail> )   
                        }                        
                    </div>
                    <div className="col-md-6">
                        <div className="card" style={{width: '25rem',marginTop:'100px', marginLeft:'70px' }}>
                            <form onSubmit={submitHandler}>
                                <div className="card-body">                                
                                    <h5 className="card-title">
                                        <h6 className="card-subtitle mb-2 text-muted">Origin</h6>                                     
                                            <input type="text"  className="form-control-plaintext" placeholder="Input your origin" style={{backgroundColor:'lightgray',padding:'7px'}} required/>
                                                                                                            
                                    </h5>
                                    <br/>
                                    <h5 className="card-title">
                                        <h6 className="card-subtitle mb-2 text-muted">Destination</h6> 
                                        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value={ placeName} style={{backgroundColor:'lightgray',padding:'7px'}}/>                                   
                                    </h5>
                                    <br/>
                                    <div className="row">
                                        <div className="d-flex justify-content-start">
                                            <div className={classes.container} noValidate>
                                                <TextField
                                                    id="date"
                                                    label="From"
                                                    type="date"
                                                    defaultValue="2017-05-24"
                                                    className={classes.textField}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end">
                                            <div className={classes.container} noValidate>
                                                <TextField
                                                    id="date"
                                                    label="To"
                                                    type="date"
                                                    defaultValue="2017-05-24"
                                                    className={classes.textField}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br/>                                
                                    <button type="submit" style={{width:'22rem'}} class="btn btn-warning btn-lg btn-block">Start Booking</button>                                                                
                                </div> 
                            </form>                           
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;