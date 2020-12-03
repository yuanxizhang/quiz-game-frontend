import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Home = () => {
    const slides = [
        { title: 'Step one', description: 'Study the flashcards to obtain programming skills', image: "https://i.imgur.com/ZXBtVw7.jpg"},
        { title: 'Step two', description: 'Get a job as a developer', image: "https://i.imgur.com/DvmN8Hx.jpg"}
    ];

    return (
        <div className="headline">
            <h1>Build something awesome. </h1>
            <h1>Make yourself a better developer.</h1>
            <h4>Learn any programming skills, one success at a time.</h4>
            <div className="slides">
                <Slider>
                    {slides.map((slide, index) => <div key={index} style={{ background: `url('${slide.image}') no-repeat center center` }}>
                        <h4>{slide.title}</h4>
                        <div>{slide.description}</div>
                    </div>)}
                </Slider>
            </div>
        </div>
    );
}

export default Home;