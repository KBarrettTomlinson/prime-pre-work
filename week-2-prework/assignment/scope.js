function thePizzeria() {
    var theNumber = 1;

    var michelangelo = function (value) {
        value = (value * 2);
        return value;
    };

    var donatello = function (value, anotherValue) {
        value = anotherValue + value;
        anotherValue = value * anotherValue;
        return anotherValue;
    };

    var leonardo = function (value) {
        var anotherValue = value;
        value *= 4;
        theNumber = value / 2;
        return (value + anotherValue);
    };

    var raphael = function (value, anotherValue, yetAnotherValue) {
        value = value * anotherValue + yetAnotherValue;
        return yetAnotherValue;
    };
    console.log("exercise 1");
    /*console.log(theNumber);
    console.log(michelangelo(theNumber));
    console.log(theNumber);
    console.log(leonardo(theNumber));
    console.log(theNumber);*/
    console.log(michelangelo(theNumber) + leonardo(theNumber));
    // ^ What number would you expect the line above to evaluate to?
    console.log("2+5=7");
    console.log("exercise 2");
    theNumber = theNumber * 2;
    console.log("theNumber * 2");
    console.log((donatello(theNumber, 2)) - (raphael(3, 2, theNumber)));
    // ^ What number would you expect the line above to evaluate to?
    console.log("8-2=6");
    // I am trying to figure out why I got the answer wrong
    // Obviously theNumber that gets passed to donatello and raphael is 4, but
    // I thought it was 2 because I didn't notice that it was re-defined in
    // the function leonardo. 
}
thePizzeria();
