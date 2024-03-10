/** Spicy
*
* Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of a Number.
* If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz".
* If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.
*/

var beeOrBeer = 30

if (beeOrBeer % 5 === 0 && beeOrBeer % 3 === 0){console.log("FizzBuzz");
} else if (beeOrBeer % 5 === 0){console.log("Buzz");
} else if (beeOrBeer % 3 === 0){console.log("Fizz");
} else {console.log(beeOrBeer)}