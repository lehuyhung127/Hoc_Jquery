// GET CONTENT: text(), html(), val()
$(document).ready(function () {
  // text()
  //   $(".run").click(function () {
  //     let text = $('.box1').text()
  //     alert(text)
  //   });
  //   html()

  // $(".run").click(function () {
  //     let html = $(".box1").html();
  //     alert(html);
  // });

  // val()
  // $(".run").click(function () {
  //     let val = $("#input").val();
  //     alert(val);
  // });


  // get attr
  $("button").click(function() {
    alert($("h1").attr("class"))
  })
});
