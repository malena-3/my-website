import React from 'react';
import './Gallery.css';
import inclusiveIden from '../pictures/inclusiveIden.jpeg';
import johnMuir from '../pictures/johnMuir.jpeg';
import sheCodesClubRush from '../pictures/sheCodesClubRush1.jpeg';
import snapSpeech from '../pictures/snapSpeech.jpeg';

const Gallery = () => {
    const images = [
        {id: 1, src: inclusiveIden, alt: 'Inclusive Identity Project @ Snap Academies', title: '👻 Snap Academies Final Showcase 2024'},
        {id: 2, src: johnMuir, alt: 'She.Codes @ Science Fest, John Muir', title: 'Science Fest @ John Muir Highschool w/She.Codes Spring 2024'},
        {id: 3, src: sheCodesClubRush, alt: 'She.Codes Club Rush Event', title: '🌟 She.Codes Club Rush Fall 2024' },
        {id: 4, src: snapSpeech, alt: 'Giving a speech at Snap Academies', title: '🎤 Snap Engineering Academy Closing Remarks (Representing the Engineering Cohort)' },
        
    ];
    return(
        <section id="galleryPg">
          <div className="headerBlock">
            <h2>Gallery</h2>
            <div id="gallery-grid">
                {images.map(image => (
                    <figure key={image.id}>
                        <img src={image.src} alt = {image.alt} id="gallery-image"/>
                        <figcaption>{image.title}</figcaption>
                    </figure>
                ))}

            </div>
            </div>
        </section>
        



    );
};

export default Gallery;