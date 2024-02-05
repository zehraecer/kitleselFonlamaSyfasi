const btn = document.querySelector(".btp")
const dialog = document.querySelector("dialog")
const closeBtn = document.querySelector(".modal-close")
const radio2 = document.querySelector(".radio2")
const radio3 =document.querySelector(".radio3")
const radio4 =document.querySelector(".radio4")
const dialog1 = document.querySelector(".dialog1")
const dialog2 = document.querySelector(".dialog2")
const dialog3 = document.querySelector(".dialog3")
const complete = document.querySelector(".complete")
const continuee = document.querySelector(".continue")
const continue2 = document.querySelector(".continue2")
const continue3 = document.querySelector(".continue3")
const gotit = document.querySelector(".gotit")



btn.addEventListener("click", showModal);
closeBtn.addEventListener("click" , closeModal)
radio2.addEventListener("click", showDialogone)
radio3.addEventListener("click", showDialogtwo)
radio4.addEventListener("click", showDialogthere)
gotit.addEventListener("click" , closeComplete)
continuee.addEventListener("click" , showComplete)
continue2.addEventListener("click" , showComplete2)
continue3.addEventListener("click" , showComplete3)




function  closeComplete(e){
  e.preventDefault();
  complete.close();
}

function showComplete2(e){
  e.preventDefault();
  complete.showModal();
}

function showComplete3(e){
  e.preventDefault();
  complete.showModal();
}


function showComplete(e){
  e.preventDefault();
  complete.showModal();
}


function showDialogone(e){
  e.preventDefault();
  dialog1.style.display="flex"
  dialog2.style.display="none"
  dialog3.style.display="none"

}


function showDialogtwo(e){
  e.preventDefault();
  dialog2.style.display="flex"
  dialog1.style.display="none"
  dialog3.style.display="none"


}


function showDialogthere(e){
  e.preventDefault();
  dialog3.style.display="flex"
  dialog1.style.display="none"
  dialog2.style.display="none"

}


function showModal(e){
  e.preventDefault();
  console.log("afksdkf");
  dialog.showModal();
}

function closeModal(e){
  e.preventDefault();
  dialog.close();  
}