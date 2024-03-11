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
});
