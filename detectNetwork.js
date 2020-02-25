// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

var detectNetwork = function(cardNumber) {

if ( ( cardNumber[0] === '3' && cardNumber[1] === '9' && cardNumber.length === 14) || (cardNumber[0] === '3' && cardNumber[1] === '8' && cardNumber.length === 14)){
  return "Diner's Club"
}
if ( ( cardNumber[0] === '3' && cardNumber[1] === '4' && cardNumber.length === 15) || ( cardNumber[0] === '3' && cardNumber[1] === '7' && cardNumber.length === 15 ) ) {
  return "American Express"
 }
 if ( cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
  
 }
 if (cardNumber[0] === '5' && cardNumber.length === 16 && ( cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5' ) ) {
 	return "MasterCard"
  }

 if ( cardNumber[0] === '6' && ( cardNumber.length === 16 || cardNumber.length === 19  ) && ((cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[1] === '4' && 
 	( cardNumber[2] === '4' || cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8'
 || cardNumber[2] === '9')) || cardNumber[1] === '5' ) ) { 
 	return "Discover"
}
if ( ( cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19 ) && 
 ( cardNumber[0] === '5' || cardNumber[0] === '6') && ( cardNumber[1] === '0' || cardNumber[1] === '3') && (cardNumber[2] === '1' || cardNumber[2] === '2' || cardNumber[2] === '3' || cardNumber[2] === '0' )
  && ( cardNumber[3] === '0' || cardNumber[3] === '8' || cardNumber[3] === '4' )) {
	return 'Maestro'
}

function isChinaUnionPay1(cardNumber) {
  var prefixRange = cardNumber.substring(0,6);

  var convertedPrefix = parseInt(prefixRange);

   for (var prefix = 622125; prefix <= 622925; prefix++) {
     if (prefix !== convertedPrefix) {
       continue;
     } else if ( prefix === convertedPrefix) {
       return true
     } 
   }
   
   return false
}

function isChinaUnionPay2(cardNumber) {
  var prefixRange = cardNumber.substring(0,3);

  var convertedPrefix = parseInt(prefixRange);

   for (var prefix = 624; prefix <= 626; prefix++) {
     if (prefix !== convertedPrefix) {
       continue;
     } else if ( prefix === convertedPrefix) {
       return true
     } 
   }
   
   return false
}

function isChinaUnionPay3(cardNumber) {
  var prefixRange = cardNumber.substring(0,4);

  var convertedPrefix = parseInt(prefixRange);

   for (var prefix = 6282; prefix <= 6288; prefix++) {
     if (prefix !== convertedPrefix) {
       continue;
     } else if ( prefix === convertedPrefix) {
       return true
     } 
   }
   
   return false
}

if ( ( isChinaUnionPay1(cardNumber) === true || isChinaUnionPay2(cardNumber) === true || isChinaUnionPay3(cardNumber) === true ) &&  
	( cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19 ) ) {
	return "China UnionPay"
}



  function isSwitchprefix1(cardNumber) {
  var prefix = cardNumber.substring(0,4);
  return prefix
}

function isSwitchprefix2(cardNumber) {
  var prefix = cardNumber.substring(0,6);
  return prefix
}

  if (
     ( isSwitchprefix1(cardNumber) === '4903' || isSwitchprefix1(cardNumber) ===  '4905' || isSwitchprefix1(cardNumber) === '4911' || isSwitchprefix1(cardNumber) === '4936' ||
      isSwitchprefix1(cardNumber) === '6333' || isSwitchprefix1(cardNumber) === '6759' ) || ( isSwitchprefix2(cardNumber) === '564182' ||isSwitchprefix2(cardNumber) === '633110')  && 
     ( cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19 )) {
    return "Switch"
  }
  return "Visa"
}

