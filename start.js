//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

const a1 = 15;
const b1 = 58;

if ((a1 >= 50 && a1 <= 99) || (b1 >= 50 && b1 <= 99)) {
    console.log(true);
} else {
    console.log(false);
}

//2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
//

const c1 = 15;
const d1 = 58;
const f1 = 98;

if (
    (c1 >= 50 && c1 <= 99) ||
    (d1 >= 50 && d1 <= 99) ||
    (f1 >= 50 && f1 <= 99)
) {
    console.log(true);
} else {
    console.log(false);
}

//3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
//
let a = 50;
let b = 245;
let c = 89;

if (a > b) {
    b = a;
}
if (b > c) {
    c = b;
}
console.log(c);

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
//
const stringA = "chico loco";
const stringB = "Py";

if (stringB.concat(stringA).slice(0, 2) === "Py") {
    console.log(stringA);
}

//5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
const d = 47;
const f = 78;
const g = d + f;

if (d >= 50 && d <= 80) {
    console.log(65);
} else {
    console.log(80);
}

//
//6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
//

const h = 16;
const i = 9;

if (h + i === 8 || h - i === 8 || i - h === 8) {
    console.log(true);
} else {
    console.log(false);
}

//7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

const j = 15;
const k = 35;

if (j === 15 || k === 15 || j + k === 15) {
    console.log(true);
}
//
//8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
const l = 22;
const m = 56;
if (l % 7 === 0 || l % 11 === 0 || m % 7 === 0 || m % 11 === 0) {
    console.log("ex8", true);
}

//
//9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
const n = l + m;

if (l === m) {
    console.log(n * 3);
}

//
//10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

const o = 67;
const diff = 67 - 19;

if (o > 19) {
    console.log(diff * 2);
}
//
//11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".
//

const firstName = "Tito";
const age = 24;

if (age < 13) {
    console.log(`${firstName} is a child`);
} else
if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else
if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is an adult`);
}
//12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.