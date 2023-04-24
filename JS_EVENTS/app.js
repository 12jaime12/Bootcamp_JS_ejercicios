//1.1
const click = document.querySelector(".click");
const clickF = (e) => {
  console.log(e.target.value);
};
click.addEventListener("click", clickF);
//1.2
const focus = document.querySelector(".focus");
const focusF = (e) => {
  console.log(e.target.value);
};
focus.addEventListener("focus", focusF);
//1.3
const input = document.querySelector(".value");
const inputF = (e) => {
  console.log(e.target.value);
};
input.addEventListener("input", inputF);
