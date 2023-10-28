// Animation on scroll
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});

// Scroll Back To Top Button and opacity effect
$(window).scroll(function () {
  if ($(this).scrollTop() >= 20) {
    $(".go-to-top").fadeIn(200);
    $(".whatsapp").fadeIn(200);
  } else {
    $(".go-to-top").fadeOut(200);
    $(".whatsapp").fadeOut(200);
  }
});
$(".go-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});
