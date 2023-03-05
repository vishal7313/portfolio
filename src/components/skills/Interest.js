import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} initiallyVisible={true}>
          <h2 className={classes.heading}>Here are some of my Interest</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>
                  I am a full stack web developer and build websites using HTML, CSS, Javascript, PHP.<br /> 
                  I have also good grasp on Node JS and MySQL with experience in Wordpress.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Data Analyst</h3>
                <p>
                  I like to visualize data.
                  My interest lead me to learn more about data science using R and Pandas Library. 
                  I completed Data Science Certifacte from Google.
                </p>
              </div>
            </ScrollAnimation>
           
            <ScrollAnimation offset={0} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>
                  I also have decent hand in developing website with WordPress.<br />
                  C++, Python, Github are my other fields of interest.
                  Currently, I am learning React JS to enhance my frontend skills
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;