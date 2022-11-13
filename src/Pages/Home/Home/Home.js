import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testomonial from '../Testomonial/Testomonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <About></About>
            <MakeAppointment></MakeAppointment>
            <Testomonial></Testomonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;