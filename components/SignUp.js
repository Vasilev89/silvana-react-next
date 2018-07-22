
import React, { Component } from 'react';

class SignUp extends Component{
    render() {
        return(
            <section class="ss-component ss-section-sign-up">
            <h2 class="ss-component-update-form-heading">Sign Up For Updates</h2>
            <section class="ss-component-update-form clearfix">
                <aside class="ss-section-sign-up-disclaimer">
                    <p class="ss-light-copy ss-body-style">Silvana is currently re-building and improving her website. If you would like to stay up-to-date with us and get notified of any up-and-coming exhibitions then, please - sign up.</p>
                </aside>
                <form class="ss-form" action="https://silvanasahagart.us17.list-manage.com/subscribe/post" method="POST" name='Sign Up User'>
                    <input type="hidden" name="u" value="854fb6542dc8e5dc4a4a1a30f"/>
                    <input type="hidden" name="id" value="bc3216ec1f"/>
                    <input required type="email" class="form-control ss-form-email md-col-9" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder='Email address'/>
                    <button class="ss-standard-cta-link ss-standard-cta-link__primary-cta ss-standard-cta-link__primary-cta-promotion col-10 md-col-3" type="submit">Sign Up</button>
                </form>
                <small id="emailHelp" class="form-text text-muted ss-form-disclaimer">We'll never share your email with anyone else. That's a promise.</small>
            </section>
        </section>
        )
    }
}

export default SignUp;
