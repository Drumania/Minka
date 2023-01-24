$(document).ready(function () {
  $("#view-more-projects").on("click", function () {
    $(this).hide();
    $(".hidden-works").css("display", "flex");
  });
});
