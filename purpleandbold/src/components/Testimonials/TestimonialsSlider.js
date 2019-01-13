import React, { Component } from 'react';
import Marquee from "react-smooth-marquee"
import Carousel from 'nuka-carousel';
import Slider from "react-slick";
import style from "./slider.module.sass"

class TestimonialsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: [
                {
                    id: 1,
                    name: "Dima Duchet",
                    position: "Artist, Art Lead",
                    testimonial:
                        "Purple and Bold has worked on my personal art website, which means that I had to deliver many visual assets. Quinn was patient with me, and had good solutions to any questions I had. I am so excited to finally have a website of my own that is linked to all my other profiles and will serve as a good place to start my business."
                },
                {
                    id: 2,
                    name: "Robert Riordan",
                    position: "Actor, Singer",
                    testimonial:
                        "Purple and Bold takes the picture in your head and brings it to life. They knows how to simplify tastefully and create solid options quickly. They are a real gem to work with too, and communicate very well."
                },
                {
                    id: 3,
                    name: "Jared Bonnell",
                    position: "Broker/Owner, One Commercial",
                    testimonial:
                        "Purple and Bold has made me the exact website I want that has really helped me get in front of maybe buyers and sellers. I am proud to hand people the business card the designed for me and even prouder when people complement my website."
                },
                {
                    id: 4,
                    name: "Jim Jackson",
                    position: "Broker/Owner, Bluhare Studios",
                    testimonial:
                        "Purple and Bold did a great job on our company website. They were attentive to our needs and delivered the exact product we were looking for in a timely manner."
                }
            ],
            slideIndex: 0

        }
    }


    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div className={style.testimonials__slider__container}>
                <Carousel autoplay={true} wrapAround={true} slidesToShow={3}
                    withoutControls={true}
                    slideIndex={this.state.slideIndex}
                >


                    {this.state.testimonials.map((testimonial, index) => (
                        <div className={style.testimonials__slider__container__slide} key={index}>
                            <p className={style.description}>{testimonial.testimonial}</p>
                            <div className={style.bottom}>
                                <h4>{testimonial.name}</h4>
                                <p className={style.position}>{testimonial.position}</p>
                            </div>
                        </div>
                    )
                    )}

                </Carousel>
            </div>

        )
    }
}

export default TestimonialsSlider;