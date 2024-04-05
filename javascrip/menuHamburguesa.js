const iconoH = document.getElementById("icono-h"); 
const menuHam = document.getElementById("menu-ham");
const navList = document.getElementById("nave-list-mv")
//  const listHam = document.getElementById("nave-list-mv");
let showMenu2 = true;
console.log(iconoH)
console.log(menuHam)
console.log(showMenu2)

iconoH.addEventListener("click", iconoMenu);

function iconoMenu(){
   if(showMenu2 === true){
     
   navList.style.display="block"
    menuHam.style.display = "flex"
    menuHam.style.flexDirection = "column"
     // listHam.style.display = "none"
     showMenu2 = false;
     
  } else{
     menuHam.style.display = "none";
    // listHam.style.display = "block"
    menuHam.style.flexDirection = "row"
    showMenu2 = true;
   }

}
let comp=true
addEventListener('resize',()=>{
  if(innerWidth<700){
    navList.style.display="none"
  }
})