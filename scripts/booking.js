/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dayButtons = document.querySelectorAll('.blue-hover');
var halfButton = document.getElementById('half');
var fullButton = document.getElementById('full');
var clearButton = document.getElementById('clear-button');
var totalCost = 0;
var dailyRate = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayCounter(event) {
  let clickedButton = event.target;

  clickedButton.classList.toggle('clicked');
  updateTotalCost();
}

dayButtons.forEach(function(button) {
  button.addEventListener('click', dayCounter);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDaysClick() {
    dayButtons.forEach(function(button) {
      button.classList.remove('clicked');
    });
    halfButton.classList.remove('clicked');
    fullButton.classList.remove('clicked');
    updateTotalCost();
  }
  
  clearButton.addEventListener('click', clearDaysClick);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayClick() {
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    updateTotalCost();
  }
  
  halfButton.addEventListener('click', halfDayClick);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayClick() {
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    updateTotalCost();
  }
  
  fullButton.addEventListener('click', fullDayClick);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateTotalCost() {
  let costAmount = document.getElementById('calculated-cost');
  let numberOfDays = 0;

  dayButtons.forEach(function(button) {
      if (button.classList.contains('clicked')) {
          if (button !== fullButton && button !== halfButton) {
              numberOfDays += 1;
          } else {
              if (fullButton.classList.contains('clicked')) {
                  dailyRate = 35;
              } else if (halfButton.classList.contains('clicked')) {
                  dailyRate = 20;
              }
          }
      }
  });
  
  totalCost = dailyRate * numberOfDays;
  costAmount.innerHTML = totalCost;
}
