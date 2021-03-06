import Link from 'next/link'
import React, { Component } from 'react';
import Headroom from './headroom/index';
import PopUp from '../components/Popup';
import MobileMenu from '../components/MobileMenu';
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      showMobileOverlay: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  toggleMenu() {
    this.setState({
      showMobileOverlay: !this.state.showMobileOverlay
    });
  }

  render() {
    return (
      <div>
      <Headroom>
        <header className="ss-component-header">
        <Link prefetch href="/">
          <h1 className="ss-logo col-12 md-col-4"><a href="#">Silvana Sahag</a></h1>
        </Link>
        <nav className="ss-navigation-component md-col-4 ss-desktop-navigation" itemProp="Website Navigation">
          <ul>
            <li onClick={this.togglePopup.bind(this)} className="ss-navigation-component-current ss-init-sign-up-form"><a className="ss-init-signup" href="#">Shop</a></li>
            <Link prefetch href="/about">
              <li><a href="#">About The Artist</a></li>
            </Link>
            <Link prefetch href="/contact">
              <li><a href="#">Contact</a></li>
            </Link>
          </ul>
        </nav>
        <ul className="ss-social-icons col-12 md-col-4 ">
          <li id="social_link" className="social_links_item">
            <a className="external" href="http://www.facebook.com" target="_blank"><i className="social_media_icon facebook" /></a>
          </li>
          <li id="social_link" className="social_links_item">
            <a className="external" href="http://www.google.com" target="_blank"><i className="social_media_icon fa instagram" /></a>
          </li>
          <li id="social_link" className="social_links_item">
            <a href="class=&quot;external&quot;" target="_blank"><i className="social_media_icon envelope" /></a>
          </li>
        </ul>
        <menu onClick={this.toggleMenu.bind(this)} className="menu ss-mobile-navigation nav-toggle">
          <a href="#" className="ss-mobile-navigation-menu-link">
            <span>
              Menu
            </span>
          </a>
        </menu>
      </header>
  </Headroom>
    <PopUp
    closePopup={this.togglePopup.bind(this)}
    toggleOverlay={this.state.showPopup ? "ss-pop-up-trigger ss-popup-ui show" : "ss-pop-up-trigger ss-popup-ui"}
    togglePopupOverlay = {this.state.showPopup ? "ss-popup-ui-content show" : "ss-popup-ui-content"}
    />
    <MobileMenu
    closeMobileMenu = {this.toggleMenu.bind(this)}
    toggleMobilePopup = {this.togglePopup.bind(this)}
    toggleMobileOverlay= {this.state.showMobileOverlay ? "menu-overlay ss-mobile-navigation ss-site-overlay open" : "menu-overlay ss-mobile-navigation ss-site-overlay"}
    />
  </div>
    );
  }
}

export default Header;

