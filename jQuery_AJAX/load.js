$(document).ready(function () {
  $("#btn_all").click(function () {
    $("#div1").load("./demo_test.txt");
  });
  // khi click vào btn thì toàn bộ nội dung của thẻ div có id="div1" sẽ được thay thế bằng nội dung của file demo_test.txt

  $("#btn_one").click(function () {
    $("h3").load("./demo_test.txt #p1");
  });
  // khi click vào btn thì toàn bộ nội dung của thẻ div có id="div2" sẽ được thay thế bằng nội dung thẻ p có id="p1" của file demo_test.
});
