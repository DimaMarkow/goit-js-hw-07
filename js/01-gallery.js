import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  container: document.querySelector(`.gallery`),
};

const imgMarkup = createImgMarkup(galleryItems);

refs.container.insertAdjacentHTML(`beforeend`, imgMarkup);

refs.container.addEventListener(`click`, handleImgClick);

function createImgMarkup(items) {
  return items
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
    </div>`;
    })
    .join(``);
}

function handleImgClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains(`gallery__image`)) {
    return;
  }

  const instance = basicLightbox.create(`
    <img class="gallery__image" src= '${event.target.dataset.source}', width="800" height="600">
`);

  instance.show();

  window.addEventListener(`keydown`, handleEsc);
}

function handleEsc(event) {
  if (!(event.code === `Escape`)) {
    return;
  }
  instance.close();
  window.removeEventListener(`keydown`, handleEsc);
}

//-----------------basicLightbox-----------------

// const instance = basicLightbox.create(`
//     <img src= 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg', width="800" height="600">
// `);

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
// console.log(instance);
//----------------------------------------------
