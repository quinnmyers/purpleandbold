import React, { Component } from 'react';
import Content from "../utility/Content/Content"
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from "./contact.module.sass"
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
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.addTag = this.addTag.bind(this)
        this.addCustomTag = this.addCustomTag.bind(this)
        this.onSliderChange = this.onSliderChange.bind(this)
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
    }
    onSliderChange(e) {
        this.setState({
            priceMin: e[0],
            priceMax: e[1]
        })
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
                        <form action="https://formspree.io/contact@purpleandbold.com" method="POST">
                            <div className={style.contact__body}>


                                <div className={`${style.flex__col} ${style.contact__body__left}`}>

                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__name}`} >
                                        < label for="name" > Name *</label >
                                        <input name="yourName" type="text" onChange={this.handleChange} id="name" value={this.state.yourName} />
                                    </div>
                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__company}`}>
                                        < label for="company" > Company</label >
                                        <input type="text" name="company" onChange={this.handleChange} id="company" value={this.state.company} />
                                    </div>
                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__telephone}`}>
                                        < label for="Telephone" > Telephone *</label >
                                        <input type="text" name="telephone" onChange={this.handleChange} id="Telephone" value={this.state.telephone} />
                                    </div>
                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__email}`}>
                                        < label for="email" > Email *</label >
                                        <input type="text" name="email" onChange={this.handleChange} id="email" value={this.state.email} />
                                    </div>
                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__left__details}`}>
                                        < p> Project Details</p>
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

                                        <div className={style.tag}>

                                            {this.state.pickedTags.map((tag, index) => (
                                                <div className={style.tag__bubbles}
                                                    onClick={() => this.removeTag(index)} key={index}>
                                                    <p>{tag.toLowerCase()}</p>
                                                    <button onClick={() => this.removeTag(index)} class="tag__bubbles__del">x </button>
                                                </div >
                                            ))}

                                        </div>

                                        <p className={style.pb}> You can reach me by phone at <span className={style.contact__body__right__ul}> {this.state.telephone} </span> or <span className={style.contact__body__right__span}><br /></span>  at my email <span className={style.contact__body__right__ul}>{this.state.email}</span></p>
                                        <p className={style.pb}>I am looking to spend between <span className={style.contact__body__right__ul}> ${this.state.priceMin.toLocaleString()} </span> and <span className={style.contact__body__right__ul}> ${this.state.priceMax.toLocaleString()} </span> .</p>
                                    </div>

                                    <div className={`${style.flex__col} ${style.transback} ${style.contact__body__right__missed}`}>
                                        <label for="missed">Did We Miss Anything?</label>
                                        <textarea name="missed" v-model="messageData.missed" id="missed" onChange={() => this.handleChange} name="missed" value={this.state.missed}></textarea>
                                    </div>
                                </div>

                            </div >

                            <input type="submit" ref="submit" value="Send Message" className={style.send} />
                        </form>
                    </div>
                </Content >
            </section >


        );
    }
}

export default Contact;