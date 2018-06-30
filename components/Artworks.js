import React, {Component} from 'react';

class Artworks extends Component{
    render(){
        return(
            <section className="ss-component ss-component-artworks clearfix">
                <h2 className="col-12">Artworks</h2>
                <section itemScope itemType="http://schema.org/ImageGallery" className="ss-component-arwtworks-paintings row">
                <figure className="col-12 md-col-4" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                    <a className="ss-component-gallery-item" href="images/Painting1_Large.jpg" data-caption data-size="1100x1491" itemProp="contentUrl">
                    <img className="ss-component-arwtworks-paintings-painting lazyload" data-src="images/Painting1.jpg" itemProp="thumbnail" alt="Image description" />
                    </a>
                    <div className="ss-component-gallery-item-sales-card" />
                </figure>
                <figure className="col-12 md-col-4" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                    <a className="ss-component-gallery-item" href="images/Painting2_Large.jpg" data-caption data-size="1100x1491" itemProp="contentUrl">
                    <img className="ss-component-arwtworks-paintings-painting lazyload" data-src="images/Painting2.jpg" itemProp="thumbnail" alt="Image description" />
                    </a>
                    <div className="ss-component-gallery-item-sales-card" />
                </figure>
                <figure className="col-12 md-col-4" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                    <a className="ss-component-gallery-item" href="images/Painting3_Large.jpg" data-caption data-size="2964x3947" itemProp="contentUrl">
                    <img className="ss-component-arwtworks-paintings-painting lazyload" data-src="images/Painting3.jpg" itemProp="thumbnail" alt="Image description" />
                    </a>
                    <div className="ss-component-gallery-item-sales-card" />
                </figure>
                </section>
        </section>
        )
    }
}

export default Artworks;