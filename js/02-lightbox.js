import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);




function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
    
}
   
const lightbox = new SimpleLightbox('.gallery a', { captionData: "alt", captionPosition: 'bottom', captionDelay: 250,
});
console.log(lightbox);
