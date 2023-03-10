import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from "../assets/img/portfolio/1.jpg"
import img2 from "../assets/img/portfolio/2.jpg"
import img3 from "../assets/img/portfolio/3.jpg"
import img4 from "../assets/img/portfolio/4.jpg"
import img5 from "../assets/img/portfolio/5.jpg"
import img6 from "../assets/img/portfolio/6.jpg"

const portfolio = [
    { title: 'Threads', subtitle: 'Illustration', image: img1 },
    { title: 'Explore', subtitle: 'Graphic Design', image: img2 },
    { title: 'Finish', subtitle: 'Identity', image: img3 },
    { title: 'Lines', subtitle: 'Branding', image: img4 },
    { title: 'Southwest', subtitle: 'Website Design', image: img5 },
    { title: 'Window', subtitle: 'Photography', image: img6 }
];

class Portfolio extends Component {
    render() {
        return (
            <section class="page-section bg-light" id="portfolio">
            <div class="container">
                
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>

                <div class="row">
                    {portfolio.map((item,index) => {
                        return <PortfolioItem {...item} key = {index} />
                    })}
                </div>

            </div>
        </section>
            
        )
    }
}

export default Portfolio







