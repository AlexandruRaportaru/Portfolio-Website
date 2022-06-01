let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-82px";
  }
  
  if (currentScrollPos > 0) {
      navbar.style.boxShadow = "0 10px 30px -10px #000000";
  } else {
      navbar.style.boxShadow = "none";
  }
  
  prevScrollpos = currentScrollPos;
} 


function toggleMenu()
{
  const isOpen = document.querySelector('.menu-toggle input').checked;
  const content = document.querySelector('.content');

  if(isOpen) {
    document.body.classList.add("stop-scrolling");
    content.classList.add("blur");
  } else {
    document.body.classList.remove("stop-scrolling");
    content.classList.remove("blur");
  }
}

function autoClose() {
  const input = document.querySelector('.menu-toggle input');
  const content = document.querySelector('.content');

  input.checked = false;
  document.body.classList.remove("stop-scrolling");
  content.classList.remove("blur");
}


function submitForm(event){
  event.preventDefault();
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('subject').value='';
  document.getElementById('message').value='';
}
