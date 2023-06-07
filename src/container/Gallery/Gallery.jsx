import React from 'react';

import { images } from '../../constants';
import { MenuItem, SubHeading } from '../../components';


import './Gallery.css';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';

const galleryImages = [
  images.gallery01, images.gallery02, images.gallery03, images.gallery04
];

const Gallery = () => {

  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }

  }

  return (
    <div className='app_gallery flex__center'>
        <div className='app__gallery-content'>
          <SubHeading title='Instagram'></SubHeading>
          <h1 className='headtext__cormorant'>Photo Gallery</h1>
          <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type='button' className='custom__button'>View More</button>
        </div>
        
        <div className='app_gallery-images'>
            <div className='app_gallery-images_container' ref={scrollRef}>
                {galleryImages.map((image, index) => (
                  <div className='app__gallery-images_card flex__center' key={`galley_image-${index + 1}`}>
                      <img src={image} alt='Gallery Image' />
                      <BsInstagram className='gallery__image-icon'></BsInstagram>
                  </div>
                ))}
            </div>
            <div className='app_gallery-images_arrow'>
              <BsArrowLeftShort className='gallery__arrow-icons' onClick={() => scroll('left')}></BsArrowLeftShort>
              <BsArrowRightShort className='gallery__arrow-icons' onClick={() => scroll('right')}></BsArrowRightShort>
            </div>
        </div>
    </div>
  );
}

export default Gallery;
