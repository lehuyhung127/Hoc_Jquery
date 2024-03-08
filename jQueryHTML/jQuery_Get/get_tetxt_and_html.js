$(document).ready(function () {
  // khi click vao button co id= btn-text
  $("#btn-text").click(function () {
    // khai bao 1 bien de lay gia tri cua the p co id=content
    let showText = $("#content").text();
    // dung alert de hien thi text
    alert(showText);

  });

    $("#btn-html").click(function () {
        let showHTML = $("#content").html();
        alert(showHTML);
    })


});
