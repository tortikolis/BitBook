import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export class Header extends Component {

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper #00acc1 cyan darken-1">
                        <div className="container">
                            <a href="/" className="brand-logo">BitBook</a>
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">list</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="sass.html">Feed</a></li>
                                <li><Link to='/people'>People</Link></li>
                                <li><a href="collapsible.html">Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="Feed.html">Feed</a></li>
                    <li><a href="badges.html">People</a></li>
                    <li><a href="collapsible.html">Profile</a></li>
                </ul>
            </div>
        )
    }
}