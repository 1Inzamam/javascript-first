var ticketPrice = 900;
var age = 50;

var categories;
if (age <= 10) {
  categories = "children";
  console.log("children")
} else {
  if (age >= 10 && age <= 25) {
    categories = "Students";
    console.log("Student")
  }
  else{
    if(age>=25 && age<50){
        categories ="Normal citizens"
        console.log("Normal citizens")
    }
    else{
        
            categories = "Senior citizens";
        console.log("Senior citizens")
        
    }
  }
}

if (age <= 10) {
  var discount = (ticketPrice * 100) / 100;
  var finalAmount = ticketPrice - discount;
  console.log("Ticket free");
} else {
  if (age >= 10 && age <= 25) {
    discount = (ticketPrice * 50) / 100;
    finalAmount = ticketPrice - discount;
    console.log("Ticket price: " + finalAmount + "tk");
  } else {
    if (age >= 50) {
      discount = (ticketPrice * 15) / 100;
      finalAmount = ticketPrice - discount;
      console.log("Ticket Price: " + finalAmount + "tk");
    } else {
      console.log("Regular ticket price: " + ticketPrice + "tk");
    }
  }
}
