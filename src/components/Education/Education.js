import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Software Developer  <span>July(2019)-Present</span></h2>
                                                    <p>
                                                        I am currently working as 
                                                        <b> Software Developer </b> at <a target="_blank" rel="noreferrer" href="https://www.hansenpolebuildings.com/"><b>Hansen Pole Buildings </b></a> 
                                                        
                                                        <i>
                                                            (Hansen Pole Buildings is the leading provider of quality and affordable pole barns. Hansen Pole Buildings offers the largest selection of pole barn kits) 
                                                        </i>
                                                    </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Undergraduation at NDSU <span>Aug(2017) - May(2019)</span></h2>
                                                    <p>
                                                        I completed my rest of undergraduation in CS (Computer Science) from <b><a href='https://www.ndsu.edu/'>NDSU</a></b> with overall 3.90/4.00 CGPA.
                                                        <br />
                                                        Dean's List <b>Fall 2017, Spring 2018, Fall 2018, Spring 2019</b>
                                                    </p>

                                                    <h2 >Undergraduation at Manipal University <span>Aug(2015) - May(2017)</span></h2>
                                                    <p>I completed my first two years of undergraduation in CS (Computer Science) from <b><a href='https://manipal.edu/icas.html'>Manipal University</a></b> with overall 3.63/4.00 CGPA.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Internships</h2>
                                                    <p>
                                                        Completed three month Internship at <b><a href='https://www.ndsu.edu/'>Valley IT Solutions</a> <span>Dec(2018) - Mar(2019)</span> </b>
                                                    </p>

                                                    <p>
                                                        Completed three month Internship at <b><a href='https://www.arohaninfocare.com/'>Arohan Info Care Pvt. Ltd.</a> <span>July(2018) - Aug(2018)</span> </b>
                                                    </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool/>
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Higher Education  <span>2011-2015</span></h2>
                                                    <p>
                                                        I have completed my higher education from 
                                                        <b><a href='https://vivekanandschool.in/website/index.html '>Vivekanand School (Delhi, India) </a></b> 
                                                        with major subjects as Physics, Chemistry & Maths with 92.2% in XII CBSE board. 
                                                    </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Education;
