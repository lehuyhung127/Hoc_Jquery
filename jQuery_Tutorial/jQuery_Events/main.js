$(document).ready(function () {
  //    Demo một số DOM event
  // 1. khi click chuột sự kiện sẽ thay đổi
  $(".btn").click(function () {
    $(this).css({
      "background-color": "red",
      color: "white",
      border: "1px solid blue",
    });
  });

  //   2. khi dbl click thì sự kiện sẽ thay đổi
  $(".dbl-click").dblclick(function () {
    alert("bye");
  });
});
