import React, { Component } from 'react';

class PopUp extends Component{
    render(){
        return(
        <section className="ss-signup-form-global">
        <div onClick={this.props.closePopup} className={this.props.toggleOverlay}></div>
        <div className="ss-pop-up-trigger ss-popup-ui"></div>
        <div className="ss-popup-ui-wrapper">
            <div className={this.props.togglePopupOverlay}>
              <div className="ss-feature-image" />
              <div className="ss-popup-my-content">
                <h3>The Shop is Coming soon...</h3>
                <p>
                  Silvana is currently re-building and improving her website. If you would like to stay up-to-date with us and get notified when she is ready to ship then please give us your email.
                </p>
                <form name="sssignupform" method="POST" netlify>
                <p class="hidden">
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                  <input className="form-control ss-form-email" type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size={25} placeholder="Please Enter Your Email Address" />
                  <button className="ss-standard-cta-link ss-standard-cta-link__primary-cta ss-standard-cta-link__primary-cta-promotion" type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        )
    }
}
export default PopUp;