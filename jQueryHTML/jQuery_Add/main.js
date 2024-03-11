// GET CONTENT: text(), html(), val()
$(document).ready(function () {
  // append
  $("#btn_append").click(function () {
    $("#append_p").append("<b> 'Hiển thị ở cuối phần tử'</b>");
  });

  $("#btn_prepend").click(function () {
    $("#pre_p").prepend("<b>'Thêm vào đâu phần tử được chọn'</b> ");
  });
});
