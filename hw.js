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

function addIsOpenClass(mutableEl) {
  mutableEl.classList.add("is-open");
}

function removeIsOpenClass(mutableEl) {
  mutableEl.classList.remove("is-open");
}

function addSrcAttribute(mutableEl, srcSource) {
  mutableEl.setAttribute("src", srcSource);
}

function removeSrcAttribute(mutableEl) {
  mutableEl.setAttribute("src", "");
}

function addAltAttribute(mutableEl, altSource) {
  mutableEl.setAttribute("alt", altSource);
}

const openModalWindow = (event) => {
  const getDataSource = event.target.getAttribute("data-source"),
    getAlt = event.target.getAttribute("alt");

  if (event.target.nodeName === "IMG") {
    addIsOpenClass(modalWindowRef);
    addSrcAttribute(modalImageRef, getDataSource);
    addAltAttribute(modalImageRef, getAlt);
  }
};

const closeModalWindow = (event) => {
  if (
    event.target.nodeName === "BUTTON" ||
    event.target.nodeName === "DIV" ||
    event.key === "Escape"
  ) {
    removeIsOpenClass(modalWindowRef);
    removeSrcAttribute(modalImageRef);
  }
};

addNewElement(gallery, galleryListRef);

galleryListRef.addEventListener("click", openModalWindow);
modalWindowRef.addEventListener("click", closeModalWindow);
window.addEventListener("keydown", closeModalWindow);
