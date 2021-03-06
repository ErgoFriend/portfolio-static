window.addEventListener("DOMContentLoaded", function() {
  $("#loader").fadeOut(400, function() {
    $(this).remove();
  });
  // Wrap every letter in a span
  $(".ml12").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  anime
    .timeline({
      loop: false
    })
    .add({
      targets: ".ml12 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
    });

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml5 .line",
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700
    })
    .add({
      targets: ".ml5 .line",
      duration: 600,
      easing: "easeOutExpo",
      translateY: function(e, i, l) {
        var offset = -7 + 7 * 2 * i;
        return offset + "em";
      }
    });
});
