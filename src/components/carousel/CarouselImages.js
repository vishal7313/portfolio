import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa'
import Hello from '../images/profile.jpg'
import Hello1 from '../images/profile1.jpg'
import Resume from '../docs/Vishal_Ranjan_Resume.pdf'
import Pencil from '../images/pencil.jpg';

class CarouselImages extends Component {
    render() {
        return (
            <div className={classes.carousel_container} id="start">
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                    <div className={classes.image_container} >
                        <img className={classes.image} src={Hello1} alt="myImage" />
                        <div className={classes.h1}>
                            <a href={Resume} rel="opener noreferrer" target="_blank"> View Resume <FaArrowCircleDown /></a>
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={Pencil} alt="myImage" />
                        <div className={classes.h2}>
                            <h1 style={{color: 'red'}}> I love learning new</h1>
                            <h1 style={{color: 'red'}}>THINGS!!</h1>
                            <a href="https://github.com/vishal7313" rel="opener noreferrer" target="_blank"> VIEW PROJECTS <GoProject /></a>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}
export default CarouselImages