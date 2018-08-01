import React, { Component } from 'react';
import Link from 'next/link'
class MobileMenu extends Component{
    render(){
    return(
        <section className={this.props.toggleMobileOverlay}>
            <span onClick={this.props.closeMobileMenu} className="ss-mobile-navigation-close-button">Close</span>
            <nav className="overlay-menu">
            <ul className="one">
            <Link href="/">
                <li><a className="ss-mobile-navigation-nav-links" href="#">Home</a></li>
            </Link>
            <Link href="/about">
                <li><a className ="ss-mobile-navigation-nav-links" href="about.html">About</a></li>
            </Link>
                <li><a onClick = {this.props.toggleMobilePopup} className="ss-mobile-navigation-nav-links ss-init-signup" href="#">Shop</a></li>
                <Link href="/contact">
                    <li><a className="ss-mobile-navigation-nav-links" href="mailto:enquires@silvanasahagart.com">Contact</a></li>
                </Link>
            </ul>
            </nav>
        </section>
        )
    }
}
export default MobileMenu;