import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  container: document.querySelector(`.gallery`),
};

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

const imgMarkup = createImgMarkup(galleryItems);
console.log(imgMarkup);

refs.container.insertAdjacentHTML(`beforeend`, imgMarkup);
