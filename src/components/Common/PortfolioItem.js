
import React, { Component } from 'react'

class PortfolioItem extends Component {
    render() {

        return (
            <div class="portfolio-item">

                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src={this.props.image} alt="" />
                </a>

                <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">{this.props.title}</div>
                    <div class="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem
