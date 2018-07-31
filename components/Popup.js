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
                <form name="contact" method="POST" netlify>
                  <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                  </p>
                  <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                  </p>
                  <p>
                    <label>Your Role: <select name="role[]" multiple>
                      <option value="leader">Leader</option>
                      <option value="follower">Follower</option>
                    </select></label>
                  </p>
                  <p>
                    <label>Message: <textarea name="message"></textarea></label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        )
    }
}
export default PopUp;