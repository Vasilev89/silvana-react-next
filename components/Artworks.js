import React, {Component} from 'react';
import {PhotoSwipe} from 'react-photoswipe-node';
import {PhotoSwipeGallery} from 'react-photoswipe-node';

class Artworks extends Component{
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
    
      getThumbnailContent = (item) => {
        return (
          <img src={item.thumbnail} with={297} height={400}/>
        );
      };
    render(){
        return(
          <section className="ss-component ss-component-artworks">
          <h2>Artworks</h2>
              <PhotoSwipeGallery items={this.state.galleryItems}
              thumbnailContent={this.getThumbnailContent}/>
          </section>
        )
    }
}

export default Artworks;