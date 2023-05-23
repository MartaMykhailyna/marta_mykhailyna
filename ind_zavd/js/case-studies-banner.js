// const buttons = document.querySelectorAll('.button');
// const images = document.querySelectorAll('.banner-image');

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     images.forEach((image) => {
//       image.classList.remove('active');
//     });

//     images[index].classList.add('active');
//   });
// });
// const buttons = document.querySelectorAll('.button');
// const images = document.querySelectorAll('.banner-image');

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     images.forEach((image) => {
//       image.classList.remove('active');
//     });

//     const rows = document.querySelectorAll('.banner-container .row');
//     const columns = rows[index].querySelectorAll('.column');

//     columns.forEach((column) => {
//       const image = column.querySelector('.banner-image');
//       image.classList.add('active');
//     });
//   });
// });
const buttons = document.querySelectorAll('.case-studies__option');
const images = document.querySelectorAll('.banner-image');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // При натисканні на кнопку змінюємо видимі зображення
    images.forEach((image, imageIndex) => {
      if (imageIndex === index) {
        image.style.display = 'block'; // Показуємо відповідне зображення
      } else {
        image.style.display = 'none'; // Ховаємо інші зображення
      }
    });
  });
});

