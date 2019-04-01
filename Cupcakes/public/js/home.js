$(document).ready(function() {
  //HOW CAN WE DISPLAY THE TITLE, BODY, AND IMAGE AFTER SEARCH????
  $("#search").on("keyup", function(event) {
    event.preventDefault();
    var value = $(this)
      .val()
      .toLowerCase();
    console.log(value);
    $(".card *").filter(function() {
      $(this).toggle(
        $(this)
          .html()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });

  // Modal appears when user clicks sign-in
  $("#sign-in").on("click", function(event) {
    event.preventDefault();
    $("#modal-sign-in").modal("show");
  });

  // Modal appears when user clicks sign-up
  $("#sign-up").on("click", function(event) {
    event.preventDefault();
    $("#modal-sign-up").modal("show");

    //When a user clicks the submit button the application captures the values of the form
    $(".submit-sign-up").on("click", function() {
      var password = $("#password-sign-up").val();
      var confirm = $("#confirm-sign-up").val();

      //checks to see if password and confirmation password matches.
      if (password !== confirm) {
        $(".password-error").html("Passwords do not match.");
        return false;
      }
      var firstName = $("#fname")
        .val()
        .trim();
      var lastName = $("#lname")
        .val()
        .trim();
      var email = $("#email-sign-up")
        .val()
        .trim();

      // Application records value for new customer
      var newCustomer = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirm: confirm
      };
      console.log(newCustomer);

      //The application submits new customers
      $.post("/api/customers", newCustomer);
      console.log(newCustomer.id);
    });
  });
});
