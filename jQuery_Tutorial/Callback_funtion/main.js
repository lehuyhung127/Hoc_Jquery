$(document).ready(function () {
  // 1: Nếu có callback

  // khi click vào button
  // $("button").click(function () {
  //   // thì thẻ p sẽ được ẩn đi và khi đã ẩn xong thẻ p thì hàm alert sẽ được thực thi
  //   $("p").hide("slow", function () {
  //     // thông báo ẩn thẻ p thành công
  //     alert("Success");
  //   });
  // });


  // 2: khi không có callback
  $("button").click(function() {
    $("p").hide(1000);
    alert("content alert")
  })
});
