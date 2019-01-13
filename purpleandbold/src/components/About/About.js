import React, { Component } from 'react';
import AboutPanels from "./AboutPanles"
import style from "./about.module.sass"
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className={style.about} id="about">
                    <div className={style.about__content}>
                        <div className={style.about__content__container}>
                            <div className={style.about__content__container__left}>
                                <AboutPanels></AboutPanels>
                            </div>
                            <div className={style.about__content__container__right}>
                                <img src="../../assets/images/brand.svg" alt="Purple and Bold Logo" className={style.about__content__container__right__image} />
                                <p>Starting a business or building a brand can be overwhelming. Why? So many steps must be taken before you can even start: you need a logo, you need a website,  you don’t even have a name or brand, a business card is crucial, you also need to show up on Google, where do you start?  At Purple and Bold we strive to be your partner and handle those tasks for you, the right way,  so you can focus on what really matters, your business and life. We enjoy and obsess over the large and small details of a business and brand and know that attention to detail early on in the process of opening a business or revamping one can make a dramatic difference later.  Purple and Bold’s goal is to provide everything our clients need to start their next venture, or revamp one that needs a little attention. We are committed to providing quality work, clear and frequent communication, and delivering quality products on time, after all, we want to do this for a long time,  it’s what we love.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;