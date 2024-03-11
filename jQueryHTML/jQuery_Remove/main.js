// GET CONTENT: text(), html(), val()
$(document).ready(function () {
  // remove: xóa toàn thẻ div và thẻ con trong div
  $("#btn_remove").click(function () {
    $("#div1").remove();
  });

  // empty: xóa toàn thẻ con trong div và giữ lại thẻ div tổng
  $("#btn_empty").click(function () {
    $("#div2").empty();
  });

  // remove all elements with class="test": xóa toàn bộ thẻ p có class="test"
  $(".btn_removeClass").click(function () {
    $("p").remove(".test");
  });

  // removes all <p> elements with class="test" and class="demo" 
  // xóa các thẻ có class="test" và class="demo"
  $(".btn_remove2Class").click(function () {
    $("p").remove(".test, .demo")
  }) 
});
