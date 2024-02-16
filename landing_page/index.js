let toggleBtn = document.getElementById("toggle-btn");
let dropDownMenu = document.getElementById("drop-down-menu");

console.log(toggleBtn)
console.log(dropDownMenu)

toggleBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("open")
})