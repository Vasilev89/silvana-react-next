import React, {Component} from 'react';
import {PhotoSwipe} from 'react-photoswipe-node';
class ArtworksCTA extends Component {
    state = {
        isOpen: false,
        galleryItems: [
          {
            src: '../static/Painting1_Large.jpg',
            thumbnail: '../static/Painting1.jpg',
            w: 1100,
            h: 371,
            title: 'Image 1'
          },
          {
            src: '../static/Painting2_Large.jpg',
            thumbnail: '../static/Painting2.jpg',
            w: 1125,
            h: 1594,
            title: 'Image 2'
          },
          {
            src: '../static/Painting3_Large.jpg',
            thumbnail: '../static/Painting3.jpg',
            w: 1200,
            h: 900,
            title: 'Image 3'
          },
          {
            src: '../static/Painting3_Large.jpg',
            thumbnail: '../static/Painting3.jpg',
            w: 1200,
            h: 900,
            title: 'Image 3'
          },
          {
            src: '../static/Painting4_Large.jpg',
            thumbnail: '../static/Painting4.jpg',
            w: 1200,
            h: 900,
            title: 'Image 3'
          },{
            src: '../static/Painting5_Large.jpg',
            thumbnail: '../static/Painting5.jpg',
            w: 1200,
            h: 900,
            title: 'Image 3'
          }
        ],
        options: {
          index: 0,
          escKey: true,
          timeToIdle: 4000
        }
      };
    
      openPhotoSwipe = (e) => {
        e.preventDefault();
        this.setState({
          isOpen: true,
          options: {
            closeOnScroll: false
          }
        });
      };
    
      handleClose = () => {
        this.setState({
          isOpen: false
        });
      };
    render(){
        return (
<section className="ss-component-arwtworks-cta">
    <a className="ss-standard-cta-link ss-copy-align-center ss-init-gallery" onClick={this.openPhotoSwipe} href="#">View All Art <i className="fa fa-image fa-ss-standard-margin"></i></a>
    <span className="ss-standard-separator__alwayson ss-standard-separator-bottom ss-standard-separator-top">or</span>
    <a className="ss-standard-cta-link ss-init-signup ss-standard-cta-link__primary-cta ss-standard-cta-link__primary-cta-promotion ss-button-maxedout ss-copy-align-center" href="#">Buy Silvana's Art</a>
    <PhotoSwipe isOpen={this.state.isOpen} items={this.state.galleryItems}
    options={this.state.options}
    onClose={this.handleClose}/>
</section>
        )
    }    
}

export default ArtworksCTA;