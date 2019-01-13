import React, { Component } from 'react';
import TestimonialsSlider from './TestimonialsSlider'
import Content from '../utility/Content/Content'
import style from "./testimonials.module.sass"
class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <section className={style.testimonials} v-if="isMounted">
                <Content>
                    <div className={style.testimonials__content}>
                        <div className={style.testimonials__content__container}>
                            <h2 className={style.section__header}>Testimonials</h2>
                            <div className={style.testimonials__content__container__middle}>
                                <TestimonialsSlider></TestimonialsSlider>
                            </div>

                            <div className={style.testimonials__content__container__cta}>
                                <h3>Need help with your &nbsp;
              <ul>
                                        {/* <li 
                :class="ctaSlideClass(index)"
                v-for="(ctaSlide, index) in testimonialCtaSlides" :key="index" ref="ctaSlide">
                  {{ ctaSlide }}?
                </li> */}
                                    </ul>
                                </h3>
                                <a href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50}">
                                    <button>Get A Free Quote</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Content>
            </section>
        );
    }
}

export default Testimonials;