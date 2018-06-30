import React, { Component } from 'react';

class MobileMenu extends Component{
    render(){
        return(
    <div className="menu-overlay ss-mobile-navigation ss-site-overlay">
        <span className="ss-mobile-navigation-close-button">Close</span>
        <nav className="overlay-menu">
          <ul className="one">
            <li><a className="ss-mobile-navigation-nav-links" href="#">Home</a></li>
            <li><a className="ss-mobile-navigation-nav-links" href="about.html">About</a></li>
            <li><a className="ss-mobile-navigation-nav-links ss-init-signup" href="#">Shop</a></li>
            <li><a className="ss-mobile-navigation-nav-links" href="mailto:enquires@silvanasahagart.com">Contact</a></li>
          </ul>
        </nav>
    </div>
        )
    }
}
export default MobileMenu;