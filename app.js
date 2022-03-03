let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  const mobile = document.getElementById("mobile-wrapper")

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

//


function submitForm(){
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('subject').value='';
  document.getElementById('message').value='';
}
