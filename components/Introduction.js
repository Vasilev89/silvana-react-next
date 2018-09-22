import React, { Component } from 'react';
import Link from 'next/link'
import LazyLoad from 'react-lazy-load';
class Introduction extends Component{
    render(){
        return(

        <section className="ss-component-introduction ss-component-hero">
            
        <figure styles=""  className="col-12 lg-col-7" />
            <style jsx>{`
            /* this style only applies to the span within lexical scope */
            figure {      
            background: url("../static/silvana.jpg") no-repeat;
            background-size: cover;
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../images/silvana.jpg', sizingMethod='scale');
            -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../images/silvana.jpg', sizingMethod='scale')";
            background-position: 0% 23%;
            padding: 0px;
            margin: 0px;
            min-height: 250px; }
          `}
          </style>
            <section className="ss-component-introduction-copy-holder col-12 lg-col-6">
            {/*<div class="angle"></div>*/}
            <h2 className="ss-component-introduction-title">Silvana is a painter.</h2>
            <p className="ss-hero ss-light-copy col-12">Her work explores the relationships between people, objects and emotions. Her art aims to provoke thought and question everything.
            </p>
            <Link href="about">
            <a className="ss-standard-cta-link" href="about.html">Find out more > </a>
            </Link>
            <span className="ss-standard-separator">or</span>
            <Link prefetch href="/contact">
            <a className="ss-standard-cta-link ss-standard-cta-link__primary-cta ss-init-signup" href="#">Buy Silvana's Art</a>
            </Link>
            </section>

        </section>

        )
    }
}

export default Introduction;