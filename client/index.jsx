import React from 'react';
import ReactDOM from 'react-dom';
import PhotoApp from '../services/FEC-Airbnb-Photo-Gallery/client/src/components/PhotoApp.jsx';
import BookingApp from '../services/FEC-Airbnb-Booking/client/src/components/BookingApp.jsx';
import CalendarApp from '../services/FEC-Airbnb-Calendar/client/src/components/CalendarApp.jsx';
import ReviewApp from '../services/FEC-Airbnb-Reviews/client/src/components/ReviewApp.jsx';

ReactDOM.render(<PhotoApp />, document.getElementById('photoApp'));
ReactDOM.render(<BookingApp />, document.getElementById('bookingApp'));
ReactDOM.render(<CalendarApp />, document.getElementById('calendarApp'));
ReactDOM.render(<ReviewApp />, document.getElementById('reviewApp'));
