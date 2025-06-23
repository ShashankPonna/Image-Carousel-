document.addEventListener("DOMContentLoaded", () => {
  let nextBtn = document.querySelector("#right");
  let prevBtn = document.querySelector("#left");
  let carousel = document.querySelector(".carousel");
  let list = document.querySelector(".list");
  let thumbnail = document.querySelector(".thumbnail");

  nextBtn.addEventListener("click", () => {
    let items = document.querySelectorAll(".items");
    let titems = document.querySelectorAll(".titem");
    list.appendChild(items[0]);
    thumbnail.appendChild(titems[0]);
    carousel.classList.add("next");

    setTimeout(() => {
      carousel.classList.remove("next");
    }, 500);
  });

  prevBtn.addEventListener("click", () => {
    let items = document.querySelectorAll(".items");
    let titems = document.querySelectorAll(".titem");
    lastElemLength = items.length - 1;
    list.prepend(items[lastElemLength]);
    thumbnail.prepend(titems[lastElemLength]);
    carousel.classList.add("prev");

    setTimeout(() => {
      carousel.classList.remove("prev");
    }, 500);
  });

  // setInterval(() => {
  //   let items = document.querySelectorAll(".items");
  //   let titems = document.querySelectorAll(".titem");
  //   list.appendChild(items[0]);
  //   thumbnail.appendChild(titems[0]);
  //   carousel.classList.add("next");

  //   setTimeout(() => {
  //     carousel.classList.remove("next");
  //   }, 500);
  // }, 7000);

});
