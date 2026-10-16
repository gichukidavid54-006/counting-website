const count1 = document.querySelector(".count");
const plusbtn = document.querySelector(".plusbtn");
const minusbtn = document.querySelector(".minusbtn");

plusbtn.addEventListener("click", () => {
    count1.textContent = parseInt(count1.textContent) + 1;
    
});
minusbtn.addEventListener("click", () => {
    count1.textContent = parseInt(count1.textContent) - 1;
});
