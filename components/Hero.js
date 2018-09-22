import React, { Component } from 'react';

class Hero extends Component{
    render(){
        return (
            <section className="ss-component ss-component-hero">
              <figure>              
              </figure>
              <style jsx>{`
              /* this style only applies to the span within lexical scope */
                figure {      
                background: url(../static/studio.jpg) 0px no-repeat;
                background-size: cover;
                min-height: 350px;
                max-width: 1124px;
                margin:0px;
              }
            `}
            </style>
            </section>
          );
    }
}
export default Hero;