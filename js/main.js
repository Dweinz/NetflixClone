const tabItems = document.querySelectorAll(".tab-item");
const offButtons = document.querySelectorAll("#off");

const signIn = document.querySelector(".sign-in");
document.getElementById("id01").style.display = "none";
const tabContentItems = document.querySelectorAll(".tab-content-item");
//select tab content item

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}
function signingIn(e) {
  console.log("signing in");
  if (document.getElementById("id01").style.display == "block") {
    document.getElementById("id01").style.display = "none";
  } else {
    document.getElementById("id01").style.display = "block";
  }
}
function closeSignIn(e) {
  document.getElementById("id01").style.display = "none";
}
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}
//Listen for tab clicked
tabItems.forEach(item => item.addEventListener("click", selectItem));
document.getElementById("log").addEventListener("click", signingIn);
offButtons.forEach(item => item.addEventListener("click", closeSignIn));
