var smoothie = [
	{
  	customerOrder: "yes" || "no",
    flavor: ["banana", "chocolate", "vanilla"]
  }
];

var order = [
	{
  	customerOrder: "banana",
    response: "Here's your banana smoothie!"
  },
  {
  	customerOrder: "chocolate",
    response: "Here's your chocolate smoothie!"
  },
  {
  	customerOrder: "vanilla",
    response: "Here's your vanilla smoothie!"
  }
];

var customerOrderPrompt = prompt("Would you like a smoothie?");
var flavorPrompt = prompt("What flavor would you like?")

function checkOut(cust, flav) {
	if (cust === smoothie[0].customerOrder && flav === smoothie[0].flavor[0]) {
  	console.log(order[0]);
  } else if (cust === smoothie[0].customerOrder && flav === smoothie[0].flavor[1]) {
  	console.log(order[1]);
  } else if (cust === smoothie[0].customerOrder && flav === smoothie[0].flavor[2]) {
  	console.log(order[2]);
  }	else {
  	alert("Sorry, we do not have that flavor!");
  }
}

checkOut(customerOrderPrompt, flavorPrompt);