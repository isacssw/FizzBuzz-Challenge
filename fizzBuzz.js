var output = [];

function fizzBuzz(){

  var num = output.length; // take the length to a var
  num = num+1;
  var remainOf3 = num%3;
  var remainOf5 = num%5;

  if (remainOf3 === 0 && remainOf5 === 0){
    output.push("FizzBuzz");
    console.log(output);
  } else if (remainOf3 === 0){
    output.push("Fizz");
    console.log(output);
  } else if (remainOf5 === 0){
    output.push("Buzz");
    console.log(output);
  } else {
    output.push(num); // push the next number to the array
    console.log(output); // prints the array
  }
}