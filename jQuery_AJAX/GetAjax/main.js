$(document).ready(function () {
  $("button").click(function () {
    $.get("./demo_test.asp", function (data, status) {
      console.log(status);
      if (status == "success") {
        $("h2").html("Data: " + data + " - Status: " + status);
      } else if (status == "error") {
        $("h2").text("Error: " + statusText);
      }
    }).fail(function (jqXHR, textStatus, errorThrown) {
      $("h2").text("Error: " + textStatus + ", " + errorThrown);
    });
  });
});
