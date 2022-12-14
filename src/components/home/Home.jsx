import React from 'react';
import AboutCard from '../about/AboutCard';
import HAbout from './HAbout';
import Hero from './hero/Hero';
import Test from './testimonial/Test';
import HBlog from './HBlog';
import HPrice from './HPrice';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutCard />
            <HAbout />
            <Test />
            <HBlog />
            <HPrice />
        </>
    );
}

export default Home;
