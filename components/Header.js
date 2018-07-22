import Link from 'next/link'
import React, { Component } from 'react';
import Headroom from './headroom/index';

class Header extends Component {
  render() {
    return (
      <Headroom>
      <header className="ss-component-header">
      <h1 className="ss-logo col-12 md-col-4"><a href="index.html">Silvana Sahag</a></h1>
      <nav className="ss-navigation-component md-col-4 ss-desktop-navigation" itemProp="Website Navigation">
        <ul>
          <li className="ss-navigation-component-current ss-init-sign-up-form"><a className="ss-init-signup" href="#">Shop</a></li>
          <li><a href="about.html">About The Artist</a></li>
          <li><a href="contact.html">Contact</a></li>
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
    );
  }
}

export default Header;

