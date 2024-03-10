/** Medium

Using the following variables:

```javascript
var goodDrivingRecord = true;
var age = 24;
```

Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
- If the driving record is good and user is over 25 years old, they should get a discount on the car rental
- If the user either has a good record or is over 25 years old, they should pay full price
- If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental
*/

var goodDrivingRecord = true
var age = 27

if (goodDrivingRecord === true && age > 25) {console.log("You qualifiy for a discount! Talk to an associate now!");
} else if (goodDrivingRecord === true || age > 25) {console.log("Your rental is approved! See our on site Doctor about leg and arm removal!");
} else if (goodDrivingRecord !== true && age <= 25) {console.log("Congradulations! With a more trustworthy person's signiture your rental may be availiable!")};
