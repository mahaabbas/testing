import React, { Component } from "react";
import Map from '../../components/Map/Map';
import { Link } from 'react-router-dom';
import { getCurrentLatLng } from '../../services/geolocation';
import EventForm from '../../components/EventForm/EventForm';
import UserLogout from '../../components/UserLogout/UserLogout';
import './EventsPage.css'

export default class EventsPage extends Component{

    state = {
        lat: null,
        lng: null
    };

    async componentDidMount() {
        // Destructure the object returned from getCurrentLatLng()
        const {lat, lng} = await getCurrentLatLng();
        this.setState({lat, lng});
        console.log(lat, lng);
    }

    render(){
    return (
        <div className="EventsPage">
            
            <div className="EventsPageLeft">
                
                <h1>Welcome, {this.props.user.name}!</h1>
                <EventForm /><br/>
                <Link className="btn" to='/profile'>View Profile</Link><br/><br/>
                <UserLogout />
                

            </div>
            <div className="EventsPageRight">
                <Map lat={this.state.lat} lng={this.state.lng}/>
                
            </div>
        {/* <div>
            This is the events page
            
        </div> */}
        </div>
    )
    }
}