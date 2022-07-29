let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  document.getElementById('targetB').style.visibility='hidden';
  
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
    document.getElementById('targetB').style.visibility='visible';
//replacing the iocns class
  } else { 
    closeBtn.classList.replace("bx-chalkboard", "bx-menu"); 
    document.getElementById('targetB').style.visibility='hidden';
  
  }
}

/*=====================Nav page links==============*/



/*==================== SHOW NAVBAR ====================*/

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}

linkColor.forEach((l) => l.addEventListener("click", colorLink));






function onloadMisc(){
  getCurrentDate();
  hideBanner();
}







/*---date function---*/

