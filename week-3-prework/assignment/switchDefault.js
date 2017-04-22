console.log("switchDefault code sourced");
var isWeekend;
function checkDay( today ){
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
  switch(today){
    case "monday":
      return false;
    case "tuesday":
      return false;
    case "wednesday":
      return false;
    case "thursday":
      return false;
    case "friday":
      return false;
    case "saturday":
      return true;
    case "sunday":
      return true;
    default:
      console.log("I'm sorry, but that is not a day I've ever heard of.");
      break;
  }
} // end checkDay

isWeekend = checkDay(prompt("What day of the week is today?","monday,tuesday,wednesday, etc...").toLowerCase());

// takes the response from isWeekend and gives you feedback about your answer
switch(isWeekend){
  case true:
    console.log("Today is the weekend. Don't forget to look around.");
    break;
  case false:
    console.log("Today is not the weekend, but that doesn't mean it isn't lovely.");
    break;
  default:
    console.log("Well... the most important thing is to be present in the moment anyway.");
}
