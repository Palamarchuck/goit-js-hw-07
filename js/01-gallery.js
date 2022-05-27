import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', ongGalleryContainerClick);



function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
    }).join('');
    
}

function ongGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    else {
      const instance = basicLightbox.create(`
        <img src = "${evt.target.dataset.source}"/>`, 
          window.addEventListener('keydown', onEscPress, onClickPress));
    
  instance.show();

  function onEscPress(evt) {
        if (evt.key === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPress);
        }
        };
  function onClickPress(evt) {
        if (evt.key === 'click') {
            instance.close();
            window.removeEventListener('click', onClickPress);
        }
  }
        
    }
    console.log(evt.target);

};
