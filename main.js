const wrapperRating = document.querySelector(".wrapper-rating");
const wrapperThanks = document.querySelector(".wrapper-thankyou");
const rates = document.querySelectorAll(".btn");
const submit = document.getElementById("submit");
const back = document.getElementById("back");
const rating = document.getElementById("rating");

submit.addEventListener("click", () => {
  wrapperThanks.classList.remove("hidden");
  wrapperRating.style.display = "none";
});

back.addEventListener("click", () => {
  wrapperThanks.classList.add("hidden");
  wrapperRating.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
