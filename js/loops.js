var root = document.querySelector( "#root" );
var orderedList = "<ol>";

// 100 lines of FizzBuzz

// var FizzBuzz = function FizzBuzz()

var FizzBuzz = function FizzBuzz( x ){
    if( x % 15 === 0 ){
        orderedList += "FizzBuzz";
    }
    else if( x % 3 === 0 ){
        orderedList += "Fizz";
    }
    else if( x % 5 === 0 ){
        orderedList += "Buzz";
    }
    else{
        orderedList += x;
    }
};

for( let i = 1; i < 101; i++ ){
    orderedList += "<li>";

    FizzBuzz( i );
 
    orderedList += "</li>";
    i++;
}
orderedList += "</ol>";
root.innerHTML = orderedList;
