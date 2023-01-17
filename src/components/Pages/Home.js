import React, { Component } from "react";
import Header from '../Common/Header';
import home_image from '../assets/img/header-bg.jpg';

class Home extends Component {

    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="tELL ME MORE"
                    link="/service"
                    showButton={true}
                    image={home_image}
                />
            </div>
        )
    }
}

export default Home
