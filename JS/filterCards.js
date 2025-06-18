$(document).on("click", ".button-all", function (e) {
    e.preventDefault();
    $(".nike").show();
    $(".nb").show();
    $(".asics").show();
    $(".adidas").show();
  });
$(document).on("click", ".button-adidas", function (e) {
  e.preventDefault();
  $(".nike").hide();
  $(".nb").hide();
  $(".asics").hide();
  $(".adidas").show();
});

$(document).on("click", ".button-nike", function (e) {
  e.preventDefault();
  $(".adidas").hide();
  $(".nb").hide();
  $(".asics").hide();
  $(".nike").show();
});

$(document).on("click", ".button-asics", function (e) {
  e.preventDefault();
  $(".adidas").hide();
  $(".nb").hide();
  $(".nike").hide();
  $(".asics").show();
});

$(document).on("click", ".button-nb", function (e) {
  e.preventDefault();
  $(".adidas").hide();
  $(".asics").hide();
  $(".nike").hide();
  $(".nb").show();
});
