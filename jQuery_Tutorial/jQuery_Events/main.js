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

  //    3. khi di chuột tới sự kiện thì sự kiện sẽ thay đổi
  $(".mouseenter").mouseenter(function () {
    $(this).css("color", "blue");
  });

  // 4. khi chuột rời khỏi sự kiện thì sự kiện sẽ thay đổi
  $(".mouseleave").mouseleave(function () {
    $(this).css("color", "red");
  });

  // 5. khi hover vafo class se doi mau
  $(".hovers").hover(function () {
    $(this).css("color", "green");
  });

  // 6. phương thức on: sử lí nhiều sự kiện cũng 1 lúc
  $(".method-on").on({
    
  });
});
