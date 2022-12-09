const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
const activeStr = "is-active";
function handleClickAccordion(e) {
  const content = e.target.nextElementSibling;
  console.log(content.scrollHeight);
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(activeStr);
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
  }
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-minus");
}

const counterNumber = document.querySelector(".counter-number");
const counterAdd = document.querySelector(".counter-increase");
const counterMinus = document.querySelector(".counter-descrease");
let counterValue = parseInt(counterNumber.textContent);
counterAdd.addEventListener("click", function () {
  counterValue++;
  counterNumber.textContent = counterValue;
});
counterMinus.addEventListener("click", function () {
  if (counterValue <= 1) return 0;
  counterValue--;
  counterNumber.textContent = counterValue;
});

$(".product-left-image").slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".relate-product-detail").slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
});
