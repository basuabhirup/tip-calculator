$(".tip-input").click(function() { // when any of the Tip-% buttons are clicked
  var tipPercantage = parseFloat(this.value, 10) / 100; // saves the selected Tip-% button's value
  calculateTip(tipPercantage); // calls the custom function, which is defined later
})

$(".tip-input.custom").keyup(function(event) { // when any number is typed in the custom Tip-% field
  var tipPercantage = parseFloat(this.value, 10) / 100; // saves the typed custom Tip-% value
  calculateTip(tipPercantage); // calls the function
})


// Defining the custom calculateTip function:
function calculateTip(tipPercantage) {
  var billAmount = parseFloat($("#bill-amount").val(), 10);
  var tipTotal = billAmount * tipPercantage;
  var numPeople = parseFloat($("#no-of-people").val(), 10); // holds the value of number of people
  var tipPerHead = tipTotal / numPeople;

  if (numPeople > 0 && Number.isInteger(numPeople)) { // checks whether no-of-people is an integer

    $("#tip-per-head").text(parseFloat(tipPerHead.toFixed(2)));
    $("#tip-total").text(parseFloat(tipTotal.toFixed(2)));

    $(".error-text").text(""); // revokes error message, if already present
    if ($(".people-input").hasClass("error")) { // revokes red error border style, if already present
      $(".people-input").removeClass("error");
    }

  } else if (numPeople > 0 && !(Number.isInteger(numPeople))) { // when no-of-people is not an integer
    $(".people-input").addClass("error"); // adds error class to place red border of the input field
    $(".error-text").text("Must be an integer!"); // shows error message
  } else { // when no-of-people is zero
    $(".people-input").addClass("error"); // adds error class to place red border of the input field
    $(".error-text").text("Can't be zero!"); // shows error message
  }
}


// if (this.type === "number") { // when the custom Tip-% field is selected
//   $(".tip-input.custom").keyup(function(){ // triggers after typing custom Tip-%
//     var tipPercantage = parseFloat(this.value, 10) / 100; // saves the typed Tip-% value
//     calculateTip(tipPercantage, numPeople); // calls this function, which is defined later
//   })
// }
