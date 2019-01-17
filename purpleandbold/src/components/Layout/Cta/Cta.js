import React, { Component } from 'react';
import "./cta.sass"
import { redirectTo } from '@reach/router';
class Cta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollShow: false,
            firsedopend: false,
            canShow: false,
            toShow: false,
            open: false
        }
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.toggleOpen = this.toggleOpen.bind(this)
        this.scrollHandler = this.scrollHandler.bind(this)
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll")
    }
    static getDerivedStateFromProps(props, state) {
        if (props.didScroll) {
            return { canShow: true }
        }

    }

    componentDidUpdate(nextProps, nextState, snap) {
        if (!nextProps.didScroll) {
            if (this.state.firsedopend === false) {
                this.toggleOpen()
            }
        }
    }

    toggleOpen() {
        setTimeout(() => {
            this.setState({ open: true })
        }, 5000);
        this.setState({ firsedopend: true })
    }

    close() {
        this.setState({ open: false })
    }

    open() {
        this.setState({ open: true })
    }
    scrollHandler() {
        if (window.scrollY <= window.innerHeight) {

            this.setState({ scrollShow: false })

        } else {
            this.setState({ scrollShow: true })
        }

    }

    render() {
        return (
            <div className={`cta ${this.state.open ? "cta__open" : "cta__closed"} ${this.state.scrollShow ? "cta__ult__open" : "cta__ult__closed"} ${this.props.didScroll ? "cta__showing" : "cta__gone"}`} >
                <div className={`${this.state.open ? "cta__close__open" : "cta__close__closed"}`}>
                    <button onClick={this.close}>
                        close
                </button>
                </div>
                <div className={`cta__content ${this.state.open ? "cta__content__open" : "cta__content__closed"}`} onClick={this.open}>
                    <div className="cta__content__body">
                        {/* this is the main body for content this is hiddedn when closed  */}



                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis at pariatur mollitia. Accusantium, quibusdam suscipit praesentium ducimus nostrum aspernatur velit deserunt quae vitae, incidunt vero officiis, numquam deleniti debitis!</p>




                        {/* main body ends here */}
                    </div>
                    <div className="cta__content__arrow">
                        {/* this is showen when open and hidden when closed */}
                        <button>
                            get a arrow to bounce over here for the sexs
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cta;