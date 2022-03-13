import React, {Component} from "react";
import Hero from "./Hero/Hero";

import Footer from "./Footer/Footer";
import Choice from "./SearchChoice/Choice";


export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Choice/>
                <Footer/>
            </div>
        );
    }
}
