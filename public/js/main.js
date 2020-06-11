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

//login and regist js

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
