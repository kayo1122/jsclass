
// Student info 
var studentId = "200637567";
var studentName = "Romano Scerbo-Morra";

// Wait until the page has fully loaded then show the info
document.addEventListener("DOMContentLoaded", function () {
  var studentInfoEl = document.getElementById("student-info");
  studentInfoEl.textContent = "Student ID: " + studentId + " | Name: " + studentName;
});


// The Pizza class 
// Every pizza order will have these properties.
class Pizza {
  constructor(customerName, size, crust, toppings, quantity, delivery, notes) {
    this.customerName = customerName;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings; // array of strings
    this.quantity = quantity;
    this.delivery = delivery;
    this.notes = notes;
  }

 
  // The page will show whatever this method returns
  getOrderDescription() {
    // Turn the toppings array into one comma separated string
    var toppingsText = "no extra toppings";
    if (this.toppings.length > 0) {
      toppingsText = this.toppings.join(", ");
    }

    var description = "Thanks, " + this.customerName + "! Here is your order:\n\n";
    description += "• Quantity: " + this.quantity + " x " + this.size + " pizza\n";
    description += "• Crust: " + this.crust + "\n";
    description += "• Toppings: " + toppingsText + "\n";
    description += "• Delivery Method: " + this.delivery + "\n";

    if (this.notes.trim().length > 0) {
      description += "• Special Instructions: " + this.notes.trim() + "\n";
    }

    description += "\nYour pizza will be ready soon. Enjoy!";
    return description;
  }
}


// Handle the form submit 
var form = document.getElementById("pizza-form");
var outputSection = document.getElementById("order-output");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops the page from refreshing

  clearErrors(); // wipe any old error messages first

  // Grab every value from the form
  var customerName = document.getElementById("customerName").value.trim();
  var size = document.getElementById("size").value;
  var quantity = document.getElementById("quantity").value;
  var delivery = document.getElementById("delivery").value;
  var notes = document.getElementById("notes").value;

  //find whichever radio button is checked
  var crust = "";
  var crustRadios = document.querySelectorAll('input[name="crust"]');
  for (var i = 0; i < crustRadios.length; i++) {
    if (crustRadios[i].checked) {
      crust = crustRadios[i].value;
    }
  }

  // collect every checked checkbox into an array
  var toppings = [];
  var toppingBoxes = document.querySelectorAll('input[name="toppings"]');
  for (var j = 0; j < toppingBoxes.length; j++) {
    if (toppingBoxes[j].checked) {
      toppings.push(toppingBoxes[j].value);
    }
  }

  var isValid = true;

  if (customerName.length < 2) {
    showError("err-customerName", "Please enter your name (2+ characters).");
    isValid = false;
  }

  if (size === "") {
    showError("err-size", "Please choose a pizza size.");
    isValid = false;
  }

  if (crust === "") {
    showError("err-crust", "Please choose a crust type.");
    isValid = false;
  }

  if (toppings.length === 0) {
    showError("err-toppings", "Please choose at least one topping.");
    isValid = false;
  }

  var quantityNumber = Number(quantity);
  if (quantity === "" || quantityNumber < 1 || quantityNumber > 10) {
    showError("err-quantity", "Quantity must be between 1 and 10.");
    isValid = false;
  }

  if (delivery === "") {
    showError("err-delivery", "Please choose a delivery method.");
    isValid = false;
  }

  // If anything failed stop here and don't build the pizza
  if (isValid === false) {
    outputSection.textContent = "";
    return;
  }

  // Everything passed validation
  var order = new Pizza(
    customerName,
    size,
    crust,
    toppings,
    quantityNumber,
    delivery,
    notes
  );

  // Show the order by calling the object's own method
  outputSection.textContent = order.getOrderDescription();
});


//Helper functions
function showError(elementId, message) {
  var el = document.getElementById(elementId);
  if (el) {
    el.textContent = message;
  }
}

function clearErrors() {
  var errorEls = document.querySelectorAll(".error-msg");
  for (var i = 0; i < errorEls.length; i++) {
    errorEls[i].textContent = "";
  }
}