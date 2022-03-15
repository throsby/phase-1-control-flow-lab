function scuberGreetingForFeet(distance){
  return distance > 199 
    ? (distance < 2501 
      ? ("I will gladly take your thirty bucks.") 
      : ("No can do.") ) 
    : ("This one is on me!");
};

function ternaryCheckCity(location){
return location === "NYC" ? "Ok, sounds good." : "No go.";
  
}

function switchOnCharmFromTip(tip){
  switch (tip) {  
    case 'generous':
        return "Thank you so much.";
      case 'not as generous':
        return "Thank you.";
      default:
        return "Bye.";
    }
}