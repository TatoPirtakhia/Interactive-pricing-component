const slideRange = document.querySelector(".slider");
const perMonth = document.querySelectorAll(".perMonth");
const pageView = document.querySelector(".pageView");
const discount = document.querySelector(".mobile_switch");
let value = 0;

slideRange.addEventListener("input", (event) => {
  calculate(event.target.value);
});
discount.addEventListener("click", () => {
  discount.classList.toggle("desktop_switch");
  if (value == 0) {
    value = 1;
    calculateByDiscount();
  } else {
    value = 0;
    cancel();
  }
});
function cancel() {
  if (
    perMonth[0].textContent == "$6.00" ||
    perMonth[1].textContent == "$6.00"
  ) {
    changePageView("$8.00");
  }
  if (
    perMonth[0].textContent == "$9.00" ||
    perMonth[1].textContent == "$9.00"
  ) {
    changePageView("$12.00");
  }
  if (
    perMonth[0].textContent == "$12.00" ||
    perMonth[1].textContent == "$12.00"
  ) {
    changePageView("$16.00");
  }
  if (
    perMonth[0].textContent == "$18.00" ||
    perMonth[1].textContent == "$18.00"
  ) {
    changePageView("$24.00");
  }
  if (
    perMonth[0].textContent == "$27.00" ||
    perMonth[1].textContent == "$27.00"
  ) {
    changePageView("$36.00");
  }
}
function calculateByDiscount() {
  if (
    perMonth[0].textContent == "$8.00" ||
    perMonth[1].textContent == "$8.00"
  ) {
    changePageView("$6.00");
  }
  if (
    perMonth[0].textContent == "$12.00" ||
    perMonth[1].textContent == "$12.00"
  ) {
    changePageView("$9.00");
  }
  if (
    perMonth[0].textContent == "$16.00" ||
    perMonth[1].textContent == "$16.00"
  ) {
    changePageView("$12.00");
  }
  if (
    perMonth[0].textContent == "$24.00" ||
    perMonth[1].textContent == "$24.00"
  ) {
    changePageView("$18.00");
  }
  if (
    perMonth[0].textContent == "$36.00" ||
    perMonth[1].textContent == "$36.00"
  ) {
    changePageView("$27.00");
  }
}
function calculate(index) {
  if (index == 1) {
    if (value == 1) {
      changePageView("$6.00");
    } else {
      changePageView("$8.00");
    }
    pageView.textContent = "10K ";
  }
  if (index == 2) {
    if (value == 1) {
      changePageView("$9.00");
    } else {
      changePageView("$12.00");
    }
    pageView.textContent = "50K ";
  }
  if (index == 3) {
    if (value == 1) {
      changePageView("$12.00");
    } else {
      changePageView("$16.00");
    }
    pageView.textContent = "100K ";
  }
  if (index == 4) {
    if (value == 1) {
      changePageView("$18.00");
    } else {
      changePageView("$24.00");
    }
    pageView.textContent = "500K ";
  }
  if (index == 5) {
    if (value == 1) {
      changePageView("$27.00");
    } else {
      changePageView("$36.00");
    }
    pageView.textContent = "1M ";
  }
}

function changePageView(text) {
  for (let i = 0; i < perMonth.length; i++) {
    perMonth[i].textContent = text;
  }
}
