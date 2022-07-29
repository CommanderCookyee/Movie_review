let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  document.getElementById('targetC').style.visibility='hidden';
  
  menuBtnChange(); //calling the function(optional)
});



searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});





// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    document.getElementById('targetC').style.visibility='visible';
//replacing the iocns class
  } else { 
    closeBtn.classList.replace("bx bxs-chalkboard", "bx-menu"); 
    document.getElementById('targetC').style.visibility='hidden';
  
  }
}

/*=====================Nav page links==============*/



/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId);

  // Validate that variables exist
  if (headerToggle && navbarId) {
    toggleBtn.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
      // change icon
      toggleBtn.classList.toggle("bx-x");
    });
  }
};
showMenu("header-toggle", "navbar");

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}

linkColor.forEach((l) => l.addEventListener("click", colorLink));






function onloadMisc1(){
  hideBanner1();
  check()
}





/*---date function---*/




function hideBanner1(){
  document.getElementById('targetC').style.visibility='hidden';
}
