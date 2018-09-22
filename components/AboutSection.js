import React, { Component } from 'react';


const AboutSection = (props) => {
  return (
    <section className="ss-component">
      <article className="Media">
        <img className="Media-figure" src="https://via.placeholder.com/530x360" alt />
        <p className="Media-body">{props.openingParagraph}</p>
      </article>
    </section>
  );
}

export default AboutSection;