const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const learnMoreButton = $('#learn-more');

learnMoreButton.addEventListener('click', () => {
  $('.donate-food').scrollIntoView();
})