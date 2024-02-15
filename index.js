const btn = document.querySelector("button");
const date = document.querySelector(".input-field input");
const answer = document.querySelector(".answer");

btn.addEventListener("click", () => {
    if (date.value == "") {
        alert("Please enter the Date of Birth!");
        return; // Exit the function if DOB is not entered
    }
    
    var inputDate = new Date(date.value); // Convert input string to Date object
    var today = new Date(); // Get the current date
    
    var years = today.getFullYear() - inputDate.getFullYear(); // Calculate years
    
    // Check if birthday hasn't occurred yet this year
    if (today.getMonth() < inputDate.getMonth() || (today.getMonth() == inputDate.getMonth() && today.getDate() < inputDate.getDate())) {
        years--; // Adjust years
    }
    
    var months = today.getMonth() - inputDate.getMonth(); // Calculate months
    if (months < 0) {
        months += 12; // Add 12 to months if negative
    }
    
    var days = today.getDate() - inputDate.getDate(); // Calculate days
    if (days < 0) {
        var tempDate = new Date(today.getFullYear(), today.getMonth(), 0); // Get the last day of the previous month
        days += tempDate.getDate(); // Add the number of days in the previous month
        months--; // Subtract 1 from months
    }
    
    // Display the calculated age
    // alert("Age: " + years + " years, " + months + " months, " + days + " days");
     answer.innerHTML = `<p>Your are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old</p>`
});
