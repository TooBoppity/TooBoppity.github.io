/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let COST_PER_DAY = 35;
let numberOfDaysSelected = 0;
let isHalfDaySelected = false;
let dayButtons = document.querySelectorAll(".day-selector li");
let fullDayButton = document.querySelector("#full");
let halfDayButton = document.querySelector("#half");
let clearButton = document.querySelector("#clear-button");
let calculatedCost = document.querySelector("#calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function selectDays(button) {
  button.addEventListener("click", function() {
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked");
      numberOfDaysSelected++;
    } else {
      button.classList.remove("clicked");
      numberOfDaysSelected--;
    }
    calculateCost();
  });
}

dayButtons.forEach(selectDays);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", clearDays);

function clearDays () {
  function removeClickedClass(button) {
    button.classList.remove("clicked");
  }

  dayButtons.forEach(removeClickedClass);
  
  numberOfDaysSelected = 0;
  isHalfDaySelected = false;
  
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  
  calculateCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", changeRate);

function changeRate() {
  if (!isHalfDaySelected) {
    isHalfDaySelected = true;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    COST_PER_DAY = 20;
    calculateCost();
  }
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", calculateHalfDayCost); 

function calculateHalfDayCost () {
  if (isHalfDaySelected) {
    isHalfDaySelected = false;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    COST_PER_DAY = 35;
    calculateCost();
  }
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
  let totalCost = numberOfDaysSelected * COST_PER_DAY;
  calculatedCost.innerHTML = totalCost;
}
calculateCost();
