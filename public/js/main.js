// $('#navId a').click(e => {
//   e.preventDefault();
//   $(this).tab('show');
// });

window.addEventListener('scroll', function () {
  let header = document.querySelector('nav');
  // let items = document.querySelectorAll('.items')
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('nav-scrolling-active', windowPosition);
  // items.classList.toggle('items-scrolling-active', windowPosition);
});