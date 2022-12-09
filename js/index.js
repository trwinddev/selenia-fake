window.addEventListener("load", function () {
  const tabs = document.querySelectorAll(".item-active");
  [...tabs].forEach((item) => item.addEventListener("click", handleTabClick));
  function handleTabClick(e) {
    console.log(e.target);
    [...tabs].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  }

  // $(function () {
  //   $(".header-bottom-item").click(function (e) {
  //     e.preventDefault();
  //     $(".header-bottom-item").removeClass("active");
  //     $(this).addClass("active");
  //   });
  // });

  $(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
});
