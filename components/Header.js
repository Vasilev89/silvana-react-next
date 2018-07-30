import Link from 'next/link'
import React, { Component } from 'react';
import Headroom from './headroom/index';
import PopUp from '../components/Popup';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div>
      <Headroom>
      <header className="ss-component-header">
      <Link href="/">
        <h1 className="ss-logo col-12 md-col-4"><a href="#">Silvana Sahag</a></h1>
      </Link>
      <nav className="ss-navigation-component md-col-4 ss-desktop-navigation" itemProp="Website Navigation">
        <ul>
          <li onClick={this.togglePopup.bind(this)} className="ss-navigation-component-current ss-init-sign-up-form"><a className="ss-init-signup" href="#">Shop</a></li>
          <Link href="/about">
            <li><a href="#">About The Artist</a></li>
          </Link>
          <Link href="/contact">
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
      <menu className="menu ss-mobile-navigation nav-toggle">
        <a href="#" className="ss-mobile-navigation-menu-link">
          <span>
            Menu
          </span>
        </a>
      </menu>
    </header>
  </Headroom>
    <PopUp
    toggleOverlay={ this.state.showPopup ? "ss-pop-up-trigger ss-popup-ui show" : "ss-pop-up-trigger ss-popup-ui" }
    />
  </div>
    );
  }
}

export default Header;

