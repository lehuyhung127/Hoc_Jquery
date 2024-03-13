$(document).ready(function () {
  // addClass
  $(".btn_addClassCss").click(function () {
    $("div").addClass("important");
  });

  //   removeClass
  $(".btn_removeClassCss").click(function () {
    $("div").removeClass("important");
  });

//   toggleClass
$(".btn_toggleClassCss").click(function(){
    $("div").toggleClass("important");
})
});
