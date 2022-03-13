import React, {Component} from "react";
import './Hero.css'
import {Carousel} from "react-bootstrap";
import slide1 from "../../Img/slide1.jpg"
import slide2 from "../../Img/slide2.jpg"
import slide3 from "../../Img/slide3.jpg"

export default class Hero extends Component {
    render() {
        return (
            <div className="start">
                <Carousel fade>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 h-15"
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption s>
                            <h1>ПОШУКОВА ПЛАТФОРМА ПО ВОЛНОВАСІ<br/>
                                <p>"Знайди близьких!"</p>
                            </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 h-15"
                            src={slide2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>ПОШУКОВА ПЛАТФОРМА ПО ВОЛНОВАСІ<br/>
                                <p>"Знайди близьких!"</p>
                            </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 h-15"
                            src={slide3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>ПОШУКОВА ПЛАТФОРМА ПО ВОЛНОВАСІ<br/>
                                <p>"Знайди близьких!"</p>
                            </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>
        );
    }
}

