import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    // const slides = [
    //     { title: 'Step One', description: 'Be clear about your end goal and commit to it', image: "https://i.imgur.com/bRJ9Eki.jpeg"},
    //     { title: 'Step Two', description: 'Select a language to learn', image: "https://i.imgur.com/gLb4Yy5.jpg"},
    //     { title: 'Step Three', description: 'Read code written by experienced developers', image: "https://i.imgur.com/DvmN8Hx.jpg"},
    //     { title: 'Step Four', description: 'Join a community of software engineers', image: "https://i.imgur.com/QBgYHvG.jpeg"},
    //     { title: 'Step Five', description: 'Build projects', image: "https://i.imgur.com/bMOScIo.jpeg"},
    //     { title: 'Step Six', description: 'Ace your technical interview', image: "https://i.imgur.com/t3z4KcD.jpeg"}
    // ];

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Build something beautiful</h1>           
                <h2 className="hero-subtitle">Learn new skills, become a better software developer!</h2> 
                <Link to="/problems">  
                    <button type="button" className="hero-button">
                        Search for questions
                    </button>
                </Link>
            </div>
        </section>
        

    
    );
}

export default Home;