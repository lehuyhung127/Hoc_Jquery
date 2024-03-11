$(document).ready(function () {
  $("#btn").click(function (e) {
    e.preventDefault();
    var userName = $("#userName").val();
    var password = $("#password").val();

    const loginRequestModel = {
      userNameOrEmail: userName,
      password: password,
    };
    // console.log(data);
    $.ajax({
      url: "http://account.ezsharing.vn/api/authen/user/login",
      type: "POST",
      contentType: "application/json; charset=utf-8",
      async: false,
      headers: {},
      data: JSON.stringify(loginRequestModel),
      error: function (err) {
        if (err.status === 401) {
          //window.location.href = "/login";
        }
      },
      success: function (data) {
        console.log(data);
      },
    });
  });
});
