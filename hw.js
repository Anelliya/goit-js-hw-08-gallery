import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector(".js-gallery"),
  modalWindowRef = document.querySelector(".js-lightbox"),
  modalImageRef = document.querySelector(".lightbox__image");

const addNewElement = (arr, listOfElements) => {
  const newListItem = arr.map(
    ({ preview, description, original }) =>
      `<li class="gallery__item"><a class="gallery__link" ><img  class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" /></a></li>`
  );
  listOfElements.insertAdjacentHTML("afterbegin", newListItem.join(""));
};

function togleIsOpenClass(mutableElement) {
  mutableElement.classList.toggle("is-open");
}

function changeAttribute(mutableElement, attributeName, source) {
  mutableEl.setAttribute(attributeName, source);
}

const openModalWindow = (event) => {
  const getDataSource = event.target.getAttribute("data-source"),
    getAlt = event.target.getAttribute("alt");

  if (event.target.nodeName === "IMG") {
    togleIsOpenClass(modalWindowRef);
    changeAttribute(modalImageRef, "src", getDataSource);
    changeAttribute(modalImageRef, "alt", getAlt);
  }
};

const closeModalWindow = (event) => {
  if (
    event.target.nodeName === "BUTTON" ||
    event.target.nodeName === "DIV" ||
    event.key === "Escape"
  ) {
    togleIsOpenClass(modalWindowRef);
    changeAttribute(modalImageRef, "src", "");
  }
};

addNewElement(gallery, galleryListRef);

galleryListRef.addEventListener("click", openModalWindow);
modalWindowRef.addEventListener("click", closeModalWindow);
window.addEventListener("keydown", closeModalWindow);
