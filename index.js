var tipPercantage;
// When any of the Tip-% buttons are clicked:
$(".tip-input").click(function() { // adds a handler function against the "click" event
  tipPercantage = parseInt(this.value, 10) / 100; // saves the Tip-% value of the clicked button
  calculateTip(tipPercantage); // calls a custom function, which is defined later
})

// When any number is typed in the custom Tip-% field
$(".tip-input.custom").keyup(function() { // adds a handler function against "keyup" event
  tipPercantage = parseFloat(this.value, 10) / 100; // saves the typed custom Tip-% value
  calculateTip(tipPercantage); // calls the custom function
})

// When any number is typed in the Number-of-people field
$("#no-of-people").keyup(function() { // adds a handler function against "keyup" event
  calculateTip(tipPercantage); // calls the custom function
})

$("#no-of-people").click(function() { // adds a handler function against "keyup" event
  calculateTip(tipPercantage); // calls the custom function
})

$("#bill-amount").keyup(function() { // adds a handler function against "keyup" event
  calculateTip(tipPercantage); // calls the custom function
})

$("#bill-amount").click(function() { // adds a handler function against "keyup" event
  calculateTip(tipPercantage); // calls the custom function
})

// Setting the Reset Button's functionalities:
$(".reset-button").click(function(){
  if (!$(".reset-button").hasClass("disabled")) { // when the reset button is enabled
    console.log("Reset button clicked !");
    $("#bill-amount").val("");
    $("#no-of-people").val("");
    $(".reset-button").addClass("disabled");
    $("#tip-per-head").text("0.00");
    $("#tip-total").text("0.00");
  }

})


// Defining the custom calculateTip function:
function calculateTip(tipPercantage) {
  var billAmount = parseFloat($("#bill-amount").val(), 10);
  var tipTotal = billAmount * tipPercantage;
  var numPeople = parseFloat($("#no-of-people").val(), 10); // holds the value of number of people
  var billPerHead = billAmount / numPeople;
  var tipPerHead = tipTotal / numPeople;
  var totalPerHead = billPerHead + tipPerHead;

  if (numPeople > 0 && Number.isInteger(numPeople)) { // checks whether no-of-people is an integer

    if (tipPercantage > 0) {
      $("#tip-per-head").text(parseFloat(tipPerHead.toFixed(2)));
      $("#tip-total").text(parseFloat(totalPerHead.toFixed(2)));
      $(".reset-button").removeClass("disabled");
    }

    $(".error-text").text(""); // revokes error message, if already present
    if ($(".people-input").hasClass("error")) { // revokes red error border style, if already present
      $(".people-input").removeClass("error");
    }

  } else if (numPeople > 0 && !Number.isInteger(numPeople)) { // when no-of-people is not an integer
    $(".people-input").addClass("error"); // adds error class to place red border of the input field
    $(".error-text").text("Must be an integer!"); // shows error message
  } else { // when no-of-people is zero
    $(".people-input").addClass("error"); // adds error class to place red border of the input field
    $(".error-text").text("Can't be zero!"); // shows error message
  }
}
