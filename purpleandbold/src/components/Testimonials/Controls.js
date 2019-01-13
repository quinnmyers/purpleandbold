import React, { Component } from 'react';
import style from "./controls.module.sass"
class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.testimonials__controls} v-if="isMounted">
                <div className={style.testimonials__controls__container}>
                    <div className={style.testimonials__controls__container__play}>
                        <button type="button"
                            onClick={() => this.props.play()}
                            ref="playbutton">

                            <img />

                            play boi
                            <img />

                        </button>
                    </div>
                    <div className={style.testimonials__controls__container__pause}>
                        <button type="button"
                            onClick={() => this.props.pause()}
                            ref="pausebutton">
                            pause boi
                            <img />

                            <img />

                        </button>
                    </div>

                </div>
            </div >
        );
    }
}

export default Controls;