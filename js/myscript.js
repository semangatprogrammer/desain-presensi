// $(".nav-item").on("click", function () {
//   var tuju = $(this).attr("href");
//   const tujuan = document.querySelector(".nav-item" + " ." + tuju);
//   console.log(tujuan);
//   tujuan.classList.toggle("active");
// });

$(".nav-item").on("click", function (el) {
  const tujuan = document.querySelectorAll(".nav-link");
  for (let i = 0; i < tujuan.length; i++) {
    tujuan[i].classList.remove("active");
  }
  el.target.classList.toggle("active");
  console.log(el);
});

// const bagian = document.querySelectorAll(".nav-item");
// bagian.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     console.log(e);
//     e.target.classList.toggle("active");
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });
