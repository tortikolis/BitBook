import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { logOut }  from '../../services/authService'


class Header extends Component {

    onLogout = (event) => {
        //event.preventDefault()
        logOut();
        this.props.history.push("/")
    } 

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper #00acc1 cyan darken-1">
                        <div className="container">
                            <a href="/" className="brand-logo">BitBook<i className="material-icons">group</i></a>
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">list</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/">Feed</Link></li>
                                <li><Link to='/people'>People</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><i className="material-icons" onClick={this.onLogout}>power_settings_new</i></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to='/people'>People</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><a>Logout<i className="material-icons" onClick={this.onLogout}>power_settings_new</i></a></li>
                </ul>
            </div>
        )
    }
}
export default withRouter(Header)