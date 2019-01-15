import React, { Component } from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import Content from "../utility/Content/Content"
import Slider, { Range } from 'rc-slider';
import x from "../../images/icons/x.svg"
import 'rc-slider/assets/index.css';
import style from "./contact.module.sass"
import "./contactfade.sass"
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yourName: "",
            company: "",
            telephone: "",
            email: "",
            missed: "",
            tags: ["Website", "Branding", "Marketing"],
            customTag: "",
            pickedTags: [],
            priceMin: 1500,
            priceMax: 4000,
        }
        this.hiddenRef = React.createRef()
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.addTag = this.addTag.bind(this)
        this.addCustomTag = this.addCustomTag.bind(this)
        this.onSliderChange = this.onSliderChange.bind(this)
        this.pushHidden = this.pushHidden.bind(this)

    }
    removeTag(i) {

        const tempTags = this.state.pickedTags


        tempTags.splice(i, 1);

        this.setState({ pickedTags: tempTags })


    }

    handleChange(event) {

        const stateName = event.target.name

        this.setState({ [stateName]: event.target.value });
    }

    addTag(i) {
        const tempTags = this.state.pickedTags
        tempTags.push(this.state.tags[i]);
        this.setState({ pickedTags: tempTags })
    }

    // this is called when you enter a custom tag and it will add it to the message
    addCustomTag() {
        const tempTags = this.state.pickedTags
        tempTags.push(this.state.customTag);
        this.setState({
            pickedTags: tempTags,
            customTag: ""
        })
        this.pushHidden()
    }

    pushHidden() {
        this.hiddenRef.current.value = `${this.state.priceMin}- ${this.state.priceMax} ${this.state.pickedTags}`

    }

    onSliderChange(e) {
        this.setState({
            priceMin: e[0],
            priceMax: e[1]
        })
        this.pushHidden()
    }

    render() {
        return (

            <section id="contact" className={style.section}>
                <Content>
                    <div className={style.contact}>
                        < div className={
                            style.Contact__title}>
                            <h2 className={style.section__header}>Contact Us</h2>
                        </div>
                        <form action="https://formspree.io/l33t.ppl@gmail.com" method="POST">
                            <div className={style.contact__body}>


                                <div className={`${style.flex__col} ${style.contact__body__left}`}>

                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__name}`} >
                                        < label for="name" > Name *
                                        <input required name="yourName" type="text" onChange={this.handleChange} id="name" value={this.state.yourName} />
                                        </label >
                                    </div>
                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__company}`}>
                                        < label for="company" > Company
                                               <input requiredtype="text" name="company" onChange={this.handleChange} id="company" value={this.state.company} />
                                        </label >
                                    </div>
                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__telephone}`}>
                                        < label for="Telephone" > Telephone *
                                        <input requiredtype="text" name="telephone" onChange={this.handleChange} id="Telephone" value={this.state.telephone} />
                                        </label >
                                    </div>
                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__email}`}>
                                        < label for="email" > Email *
                                        <input requiredtype="text" name="email" onChange={this.handleChange} id="email" value={this.state.email} />
                                        </label >
                                    </div>
                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__details}`}>
                                        <lable>Project Details</lable>
                                        <div className={style.tag}>
                                            {this.state.tags.map((tag, index) => (
                                                <div className={style.tag__bubbles}
                                                    onClick={() => this.addTag(index)} key={index}>
                                                    <p>{tag.toLowerCase()}</p>
                                                </div >
                                            ))}

                                            <input type="text" placeholder="Enter Your Own" onChange={this.handleChange} name="customTag" value={this.state.customTag} />
                                            <button onClick={() => this.addCustomTag()} > +</button >
                                        </div >
                                        <h4>Budget</h4>
                                        <div>
                                            <p>${this.state.priceMin.toLocaleString()} - ${this.state.priceMax.toLocaleString()} </p>

                                            <Range min={900} max={10000} step={100} defaultValue={[1500, 4000]} onChange={this.onSliderChange} />
                                        </div>
                                    </div>

                                </div>
                                <div className={`${style.flex__col} ${style.contact__body__right}`}>

                                    <div className={`${style.flex__col} ${style.contact__body__right__compose}`}>

                                        <p>Hello. My name is <span className={style.contact__body__right__ul}>{this.state.yourName}</span>  from <span className={style.contact__body__right__ul}>{this.state.company}</span> and I need: </p>

                                        <TransitionGroup className={style.tag}>
                                            {this.state.pickedTags.map((tag, index) => (
                                                <CSSTransition
                                                    key={index}
                                                    timeout={500}
                                                    classNames="tag__fade"
                                                >
                                                    <div className={style.tag__bubbles}
                                                        onClick={() => this.removeTag(index)} >
                                                        <p>{tag.toLowerCase()}</p>
                                                        <button
                                                            type="button" className={style.tag__bubbles__del}><img src={x} alt="icon of letter X" /></button>
                                                    </div >
                                                </CSSTransition>
                                            ))}
                                        </TransitionGroup>

                                        <p className={style.pb}> You can reach me by phone at <span className={style.contact__body__right__ul}> {this.state.telephone} </span> or <span className={style.contact__body__right__span}><br /></span>  at my email <span className={style.contact__body__right__ul}>{this.state.email}</span></p>
                                        <p className={style.pb}>I am looking to spend between <span className={style.contact__body__right__ul}> ${this.state.priceMin.toLocaleString()} </span> and <span className={style.contact__body__right__ul}> ${this.state.priceMax.toLocaleString()} </span> .</p>
                                    </div>

                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__right__missed}`}>
                                        <label for="missed">Did We Miss Anything?</label>
                                        <textarea name="missed" id="missed" name="missed" ></textarea>
                                    </div>
                                </div>

                            </div >
                            <textarea name="message" id="contact__send__message" className={style.real_message} ref={this.hiddenRef} cols="3" rows="1"></textarea>
                            <input type="submit" ref="submit" value="Send Message" className={style.send} />
                        </form>
                    </div>
                </Content >
            </section >


        );
    }
}

export default Contact;