import React from 'react';
import './Home.css';
import {Navigation} from '../components/Navigation'
import { Footer} from '../components/Footer'


export const Home = () => {
    return (
        <>
        <Navigation />
        <div className="hero-container">

            <img src="my_image.png" alt="Keerthi" className="profile-img" />

            <p className="greeting">Hi! I'm Keerthi 👋</p>

            <h1 className="hero-title">
                Gesix GeoAI Intern<br />
            </h1>

            <p className="hero-description">
                I am a Full Stack Intern at Gesix Solutions, working on building new features for real-world products. I collaborate with the team to develop scalable frontend and backend solutions while learning industry best practices
            </p>

            <div className="hero-btns">
                <button className="btn-primary">Contact me →</button>
                <button className="btn-secondary">My Resume</button>
            </div>
        </div>
        <Footer />
        </>
    );
};
