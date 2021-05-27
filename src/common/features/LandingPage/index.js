import React from 'react';
import Banner from './Banner';
import Demonstration from './Demonstration';
import Benefits from './Benefits';
import Services from './Services';
import HowTo from './HowTo';
import Partners from './Partners';
import Contact from './Contact';
import LandingPageFooter from './LandingPageFooter';

const LandingPage = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Demonstration />
            <Benefits />
            <HowTo />
            <Partners />
            <Contact />
            <LandingPageFooter />
        </div>
    )
}

export default LandingPage