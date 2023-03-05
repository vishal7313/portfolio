import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} initiallyVisible={true}>
                    <h2 className={classes.heading}>About Me</h2>
                    <div className={classes.About}>
                        <p>
                            My name is <b>Vishal Ranjan</b> and I am currently working as Software Developer at 
                            <a target="_blank" href="https://www.hansenpolebuildings.com/"><b> Hansen Pole Buildings</b></a>. 
                            I completed my degree in Bachelor of Science in Computer Science from North Dakota State University. 
                            My passion is to understand and effectively utilize technology and use my understanding in developing new things.
                        </p>
                        <p className={classes.br}>
                            I love exploring new technologies and like to learn new language.
                            Currently learning React.js to develop my Frontend skills.
                        </p>

                        <ProgressBar variant="info" now={90} label='HTML' />
                        <br />
                        <ProgressBar variant="info" now={90} label='CSS' />
                        <br />
                        <ProgressBar variant="info" now={75} label='C++' />
                        <br />
                        <ProgressBar variant="info" now={90} label='JavaScript' />
                        <br />
                        <ProgressBar variant="info" now={90} label='Bootstrap' />
                        <br />
                        <ProgressBar variant="info" now={60} label='Wordpress' />
                        <br />
                        <ProgressBar variant="info" now={90} label='PHP' />
                        <br />
                        <ProgressBar variant="info" now={45} label='Android Studio' />
                        <br />
                        <ProgressBar variant="info" now={90} label='MySQL' />
                        <br />
                        <ProgressBar variant="info" now={40} label='Java' />
                        <br />
                        <ProgressBar variant="info" now={20} label='React JS' />
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;