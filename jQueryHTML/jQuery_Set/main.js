// GET CONTENT: text(), html(), val()
$(document).ready(function () {
  $("#set_text").click(function () {
    $("#text_default").text(" New Text");
  });

  $("#set_html").click(function () {
    $("#html_default").html("<strong>New</strong> HTML");
  });

  $("#set_input").click(function () {
    $("#inpt_default").val("LHH Input");
  });

  $("#set_attr").click(function () {
    $("#link_default").attr("href", "https://www.youtube.com/");
  });
});
