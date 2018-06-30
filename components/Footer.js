import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="ss-component ss-component-footer">
            <h4 className="logo col-12 md-col-4 ss-component-footer-logo">Silvana Sahag</h4>
            <ul className="ss-social-icons col-12 md-col-4 clearfix">
              <li id="social_link" className="social_links_item">
                <a className="external" target="_blank"><i className="social_media_icon facebook" /></a>
              </li>
              <li id="social_link" className="social_links_item">
                <a className="external" target="_blank"><i className="social_media_icon fa instagram" /></a>
              </li>
              <li id="social_link" className="social_links_item">
                <a href="class=&quot;external&quot;" target="_blank"><i className="social_media_icon envelope" /></a>
              </li>
            </ul>
            <p className="md-col-4 ss-component-footer-reserved-rights">All Rights Reserved</p>
          </footer>
        )
    }
}

export default Footer;