const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryItemsList = document.querySelector('ul');
// console.log(galleryItemsList);
const galleryItem = galleryItems => {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('')
}


galleryItemsList.insertAdjacentHTML('afterbegin', galleryItem(galleryItems))
const modalWindow = document.querySelector('div.lightbox');
const modalPicture = document.querySelector('.lightbox__image');
const closeModalBtn = modalWindow.querySelector('button')
const divCont = modalWindow.querySelector('div.lightbox__overlay')

galleryItemsList.addEventListener('click', (e) => {
  e.preventDefault()
    if (e.target.nodeName === 'IMG') {
    modalWindow.classList.add('is-open');
    modalPicture.src = e.target.dataset.source;
    modalPicture.alt = e.target.alt;
  }
});

closeModalBtn.addEventListener('click', (e) => {
  modalWindow.classList.remove('is-open')
});
window.addEventListener('keydown', (e) => {
  e.code === 'Escape'
  modalWindow.classList.remove('is-open')
});
divCont.addEventListener('click', (e) => {
  if (e.target.classList.contains('lightbox__overlay')) {
    modalWindow.classList.remove('is-open')
  }
});

// let modalPictureIndex = galleryItems.indexOf(galleryItem)
// console.log(modalPictureIndex);
// window.addEventListener('keydown', (e) => {
//   if (modalWindow.classList.contains('is-open')){
//     if (e.code === 'ArrowRight') {
//       modalPictureIndex += 1;
//     } else {
//       if (e.code === 'ArrowLeft') {
//         modalPictureIndex -=1;
//       }
//     }
//   }
// })

if (modalWindow.classList.contains('is-open')) {
  galleryItemsList.removeEventListener('click', ()=>{});
  window.removeEventListener('keydown', ()=>{})
}
