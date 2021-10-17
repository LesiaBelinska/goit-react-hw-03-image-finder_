import React, { Component } from 'react';
//import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component{
    state = {
        
    }

//     static propTypes = {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     largeImageUrl: PropTypes.string.isRequired,
//   };

    render() {
        const { src, alt } = this.props;
        return (
            <li className="ImageGalleryItem">
                <img
                    src={src}
                    alt={alt}
                    className="ImageGalleryItem-image"
                />
            </li>
        );
    }
}


