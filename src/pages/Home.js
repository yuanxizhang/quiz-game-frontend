import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Home = () => {
    const slides = [
        { title: 'Step One', description: 'Be Clear About Your End Goal and Commit to It', image: "https://i.imgur.com/x6kU5V9.jpeg"},
        { title: 'Step Two', description: 'Select A Language to Learn', image: "https://i.imgur.com/DvmN8Hx.jpg"},
        { title: 'Step Three', description: 'Read Code Written by Experienced Developers', image: "https://i.imgur.com/s1BaPrn.png"},
        { title: 'Step Four', description: 'Join A Community of Software Engineers', image: "https://i.imgur.com/QBgYHvG.jpeg"},
        { title: 'Step Five', description: 'Build projects', image: "https://i.imgur.com/bMOScIo.jpeg"},
        { title: 'Step Six', description: 'Ace your technical interview', image: "https://i.imgur.com/bRJ9Eki.jpeg"}
    ];

    return (
        <div className="headline">
            <h1>Build something awesome. </h1>           
            <h4>Become a software developer.</h4>
            <div className="slides">
                <Slider>
                    {slides.map((slide, index) => <div key={index} style={{ background: `url('${slide.image}') no-repeat center center` }}>
                        <h4 className="slideText">{slide.title}</h4>
                        <div className="slideText">{slide.description}</div>
                    </div>)}
                </Slider>
            </div>
        </div>
    );
}

export default Home;