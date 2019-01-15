import React, { Component } from 'react';
import style from "./footer.module.sass"
import brand from "../../../images/brand.svg"
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: ""
        }
    }
    componentDidMount() {
        const d = new Date();
        const fullYear = d.getFullYear();
        this.setState({ year: fullYear })
    }
    render() {
        return (
            <section className={style.footer}>
                <div className={style.footer__content}>
                    <div className={style.footer__content__top}>
                        <img src={brand} alt="Purple and Bold Logo" />
                        <div className={style.footer__content__top__left}></div>
                        <div className={style.footer__content__top__right}></div>
                    </div>
                    <div className={style.footer__content__bottom}>Copyright &copy; {this.state.year} Myers Consulting LLC, dba Purple and Bold</div>
                </div>
            </section>
        );
    }
}

export default Footer;