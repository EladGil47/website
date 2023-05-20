import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PageWrapper extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
                    <div className="container">

                        <NavLink className="navbar-brand" to="/">
                            <img src="assets/img/navbar-logo.svg" alt="" />
                        </NavLink>

                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fa-solid fa-bars"></i>
                        </button> */}

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            {/* ul is unorder list structure */}
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                {/* If i want to jump in the same tab href = # id of class name*/}
                                {/* li is list item */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#team">Team</a>
                                </li>
                                {/* If i want href go to a new tab */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink >
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Allows to work with a navigation */}
                {this.props.children}
            </div>
        )
    }
}

export default PageWrapper;
