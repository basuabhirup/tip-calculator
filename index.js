var tipPercantage = 0;  // declares a variable to hold the tip-% value

// When any number is typed in the Bill-Amount field
$("#bill-amount").keyup(function() { // adds a handler function against "keyup" event
  calculateTip(tipPercantage); // calls the custom function
})

// When the Bill-Amount field is clicked
$("#bill-amount").click(function() { // adds a handler function against "keyup" event
  calculateTip(tipPercantage); // calls the custom function
})

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

// When the custom Tip-% field is clicked
$(".tip-input.custom").click(function() { // adds a handler function against "keyup" event
  tipPercantage = parseFloat(this.value, 10) / 100; // saves the typed custom Tip-% value
  calculateTip(tipPercantage); // calls the custom function
})


// When any number is typed in the Number-of-people field
$("#no-of-people").keyup(function() { // adds a handler function against "keyup" event
  calculateTip(tipPercantage); // calls the custom function
})

// When the Number-of-people field is clicked
$("#no-of-people").click(function() { // adds a handler function against "keyup" event
  calculateTip(tipPercantage); // calls the custom function
})


// Setting the Reset Button's functionalities:
$(".reset-button").click(function(){
  if (!$(".reset-button").hasClass("disabled")) { // when the reset button is enabled
    $("#bill-amount").val("");
    $(".tip-input.custom").val("");
    $("#no-of-people").val("");
    $("#tip-per-head").text("0.00");
    $("#tip-total").text("0.00");
    $(".reset-button").addClass("disabled");
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


  if (billAmount > 0) { // validates the Bill-Input value
    if ($(".bill-input").hasClass("error")) { // revokes red error border style, if already present
      $(".bill-input").removeClass("error");
    }
    if (numPeople > 0 && Number.isInteger(numPeople)) { // checks whether num-of-people is an integer
      $(".error-text").text(""); // revokes error message, if already present
      if ($(".people-input").hasClass("error")) { // revokes red error border style, if already present
        $(".people-input").removeClass("error");
      }
      if (!isNaN(tipPercantage)) { // checks whether the Tip-Percantage is a number or not
        $("#tip-per-head").text(parseFloat(tipPerHead.toFixed(2)));
        $("#tip-total").text(parseFloat(totalPerHead.toFixed(2)));
        $(".reset-button").removeClass("disabled");
      }
    } else if (numPeople > 0 && !Number.isInteger(numPeople)) { // when no-of-people is not an integer
      $(".people-input").addClass("error"); // adds error class to place red border of the input field
      $(".error-text").text("Must be an integer!"); // shows error message
    } else if (numPeople < 0) { // when no-of-people is negative
      $(".people-input").addClass("error"); // adds error class to place red border of the input field
      $(".error-text").text("Can't be negative!"); // shows error message
    } else { // when no-of-people is zero
      $(".people-input").addClass("error"); // adds error class to place red border of the input field
      $(".error-text").text("Can't be zero!"); // shows error message
    }

  } else if (billAmount < 0) {
    $(".bill-input").addClass("error");
    $("#tip-per-head").text("0.00");
    $("#tip-total").text("0.00");
  }


}
