import React, { Component } from 'react';

class Introduction extends Component{
    render(){
        return(
        <section className="ss-component ss-component-introduction ss-component-hero">
        <figure className="col-12 lg-col-7" />
        <section className="ss-component-introduction-copy-holder col-12 lg-col-6">
        {/*<div class="angle"></div>*/}
        <h2 className="ss-component-introduction-title">Silvana is a painter.</h2>
        <p className="ss-hero ss-light-copy col-12">Her work explores the relationships between people, objects and emotions. Her art aims to provoke thought and question everything.
        </p>
        <a className="ss-standard-cta-link" href="about.html">Find Out More</a>
        <span className="ss-standard-separator">or</span>
        <a className="ss-standard-cta-link ss-standard-cta-link__primary-cta ss-init-signup" href="#">Buy Silvana's Art</a>
        </section>
        </section>
        )
    }
}

export default Introduction;