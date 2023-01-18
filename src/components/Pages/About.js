import React, { Component } from "react";
import Header from '../Common/Header';
import about_img from '../assets/img/about.jfif';

import Timeline from "../Common/Timeline";
import Team from "../Common/Team";


class About extends Component {

    render() {
        return (
            <div>  
            <Header
               title="About Us"
               subtitle="it's a really a to great story"
               buttonText="Tell me more"
               link="/services"
               showButton={true}
               image={about_img}
           /> 

            <Timeline />
            <Team />
       </div>

        )
    }
}
export default About
