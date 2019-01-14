import React, { Component } from 'react';
import iso1 from "../../images/hero-iso/iso-1.svg"
import iso2 from "../../images/hero-iso/iso-2.svg"
import iso3 from "../../images/hero-iso/iso-3.svg"
import iso4 from "../../images/hero-iso/iso-4.svg"
import iso5 from "../../images/hero-iso/iso-5.svg"
import iso6 from "../../images/hero-iso/iso-6.svg"
import iso7 from "../../images/hero-iso/iso-7.svg"
import iso8 from "../../images/hero-iso/iso-8.svg"

import "./aboutpanles.sass"
// import hero from '../hero'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroImages: [
                {
                    src: iso1
                },
                {
                    src: iso2
                },
                {
                    src: iso3
                },
                {
                    src: iso4
                },
                {
                    src: iso5
                },
                {
                    src: iso6
                },
                {
                    src: iso7
                },
                {
                    src: iso8
                }
            ],
            panelArray: [],
            display: "none",
            panelLoaded: "",
            loadIn: "",
            aboutImage: "",
            firsClass: false,
            secondClass: false
        }
        this.styleAboutListItem = this.styleAboutListItem.bind(this)
        this.getRandomNumber = this.getRandomNumber.bind(this)
        this.panelAnimations = this.panelAnimations.bind(this)
        this.aboutBody = React.createRef()
        this.isInViewport = this.isInViewport.bind(this)
    }

    isInViewport(offset = -200) {
        if (!this.yourElement) return false;
        const top = this.aboutBody.current.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (this.isInViewport) {
                this.setState({
                    firsClass: true,
                    secondClass: true
                })
            }
        })
        // this.selectListItem();
        this.panelAnimations();
        if (this.props.inview) {
            this.setState({ firsClass: true })
            this.setState({ secondClass: true })
        }

    }
    buildRef(i) {
        return `this.Ref${i}`
    }
    getImgSrc(index) {
        return require("../../images/hero-iso/iso-" + index + ".svg");
    }
    stylePanel() {
        //translateX
        const minTranslateX = 100;
        const maxTranslateX = 800;
        let translateX = this.getRandomNumber(minTranslateX, maxTranslateX);
        if (Math.random() > 0.5) {
            translateX = translateX * -1;
        }
        //translateY
        //multiplied by 0.57 to ensure the deg movement is 30 degree the same angle used in isometric illustrations
        const translateY = translateX * 0.57;
        //scale
        const scale = Math.random();
        return {
            transform: `scale(${scale}) translateX(${translateX}px) translateY(${translateY}px) rotateY(180deg)`
            //may want to add in rotation to styling
            //
        };
    }
    styleAboutListItem() {
        // const minScale = 0.97;
        // const maxScale = 1.03;
        //const scale = this.getRandomNumber(minScale, maxScale);
        const minHeightOffset = 2;
        const maxHeightOffset = 9;
        let heightOffset = this.getRandomNumber(minHeightOffset, maxHeightOffset);
        if (Math.random() > 0.5) {
            heightOffset = heightOffset * -1;
        }
        return {
            marginTop: `${heightOffset}px`
        };
    }

    //constrols starts of animation and timeout of others if added
    panelAnimations() {
        this.state.loadIn = "load__in";
        this.state.aboutImage = "about__image";
        this.state.panelLoaded = "panel__loaded";
    }

    getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }



    render() {
        return (
            <div className="wrapper" ref={this.aboutBody}>
                <div className="not__ul">
                    {this.state.heroImages.map((heroImage, index) => (
                        <div key={index} className="not__li">
                            <img v-in-viewport src={this.getImgSrc(index + 1)} className={`about__panel__image__${index + 1} ${this.state.firsClass ? "load__in" : " "}  ${this.state.secondClass ? "panel__loaded" : " "}`} ref={this.buildRef(index)} alt="Vector illustration of of a square" style={this.stylePanel(index)} />
                        </div>
                    ))}</div>

            </div>
        );
    }
}

export default About;