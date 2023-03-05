import React, { Component } from 'react'
import classes from './Certificate.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Cert1 from '../images/certificates/data_science.jpg';
import HS1 from '../images/certificates/high_school1.jpg';
import HS2 from '../images/certificates/high_school2.jpg';
import Internship from '../images/certificates/aarohan.jpg';


class Certificate extends Component {
    render() {
        return (
            <div className={classes.box} id="certificate">
                <ScrollAnimation offset={0} initiallyVisible={true}>
                    <h2 className={classes.heading}>Certificates</h2>
                    <div className={classes.Certificate}>
                        <img src={Cert1} />
                        <img src={Internship} />
                        <img src={HS1} />
                        <img src={HS2} />
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Certificate;