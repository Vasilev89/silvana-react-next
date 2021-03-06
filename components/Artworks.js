import React, {Component} from 'react';
import {PhotoSwipe} from 'react-photoswipe-node';
import {PhotoSwipeGallery} from 'react-photoswipe-node';
import LazyLoad from 'react-lazy-load';


class Artworks extends Component{
    state = {
        isOpen: false,
        galleryItems: [
          {
            src: '../static/Painting1_Large.jpg',
            thumbnail: '../static/Painting1.jpg',
            w: 1100,
            h: 1491,
            title: 'Redemption. Print: £400. Original Work Oil on canvas(mixed technique) 1m x 2 - £1995'
          },
          {
            src: '../static/Painting2_Large.jpg',
            thumbnail: '../static/Painting2.jpg',
            w: 1125,
            h: 1594,
            title: 'Soul.Print: £400.Original Work Oil on canvas(mixed technique) 1m x 2 - £1995'
          },
          {
            src: '../static/Painting3_Large.jpg',
            thumbnail: '../static/Painting3.jpg',
            w: 2964,
            h: 3947,
            title: 'Faces and Places.Print: £400.Original Work Oil on canvas(mixed technique) 1m x 2 - £1995'
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
          <LazyLoad height={400} offsetTop={1000} debounce={0} throttle={100}>
          <div>
            <div className="filler" />
            <img src={item.thumbnail} with={297} height={400}/>
            
            </div>
          </LazyLoad>
        );
      };
    render(){
        return(
          <section className="ss-component ss-component-artworks">
          <h2>Artworks</h2>
              <PhotoSwipeGallery items={this.state.galleryItems}
              thumbnailContent={this.getThumbnailContent}/>
            <div className='pswp-thumbnails'>
                <div className="pswp-thumbnail"><h4>Redemption.</h4> 
                <p>Print: £400.</p>
                <p>Original Work Oil on canvas(mixed technique) 1m x 2 - £1995</p>
                </div>
                
                <div className="pswp-thumbnail"><h4>Soul.</h4> 
                <p>Print: £400.</p>
                <p>Original Work Oil on canvas(mixed technique) 1m x 2 - £1995</p>
                </div>

                <div className="pswp-thumbnail"><h4>Faces</h4> 
                <p>Print: £400.</p>
                <p>Original Work Oil on canvas(mixed technique) 1m x 2 - £1995</p>
                </div>
            </div>
          </section>
        )
    }
}

export default Artworks;