// ********************************** Chapter 38-42 *********************************************

// *******Assignment 38-42.1 *******

// function raised(a, b) {
//     c = a ** b
//     document.write(a + " raised to " + b + "is " + c)
// }

// raised(2, 3)


// Assignment 38-42.2

// function leapYear() {
//     var year = prompt("Enter year :")
//     if (year % 4 == 0) {
//         document.write(year + " is a leap year")
//     } else {
//         document.write(year + " is not a leap year")
//     }
// }

// leapYear()


// Assignment 38-42.3 

// function S(a, b, c) {
//     s = (a + b + c) * (1 / 2)
//     return s;
// }

// function Area(a, b, c) {
//     A = (S(a, b, c) * (S(a, b, c) - a) * (S(a, b, c) - b) * (S(a, b, c) - c))
//     document.write("Area of traiangle with sides " + a + " , " + b + " and " + c + " is " + A)
// }

// Area(7, 8, 9)

// Assign 38-42.4

// function average() {
//     marksMath = parseInt(prompt("Ënter Marks in first Math :"))
//     marksPhys = parseInt(prompt("Enter Marks in Physics :"))
//     marksChem = parseInt(prompt("Enter Marks in Chemisrty :"))
//     average = (marksMath + marksPhys + marksChem) / 3;
//     return average;

// }

// function percent() {
//     percent = ((marksPhys + marksMath + marksChem) / 300) * 100
//     return percent
// }

// function result() {
//     document.write("Average = " + average() + "<br>")
//     document.write("Percentage = " + percent() + "%")
// }

// result()

// Assign 38-42.5

// function indexof() {
//     str = "Hello Everyone , Welcome to my code ";
//     i = str.indexOf("W")
//     document.write("IndexOf W is " + i);
// }

// indexof()

// Assign 38-42.6 

// function removeVowels(string) {
//     var array = ["a", "i", "e", "o", "u"]
//     i = 0
//     while (i < string.length) {
//         if (string[i] = array) {
//             remove = string.replace(/[aeiou]/g, '_');

//         }
//         i++
//     }
//     alert(remove)
// }
// removeVowels("all vowels will be removed")

// Assign 38-42.7 


// Assign 38-42.8 

// function distKm() {
//     var distKm = parseFloat(prompt("Enter Distance between two cities in Km :"))
//     return distKm;
// }

// function distMeter() {
//     var distMeter = distKm() * 1000;
//     return distMeter;
// }


// function distFeet() {
//     var distFeet = distKm() * 3280;
//     document.write("Distance in meter is " + distMeter() + "<br>")
//     return distFeet;
// }

// function distInches() {
//     var distInches = distKm() * 39370;
//     document.write("Distance in Km is " + distFeet() + "<br>")
//     return distInches;
// }

// function distCm() {
//     var distCm = distKm() * 100000;
//     document.write("Distance in Inches = " + distInches() + "<br>")
//     return distCm;
// }

// document.write("Distance is Cm " + distCm())


// Assign 38-42.9

// function OvertimePay(hours) {
//     if (hours >= 40) {
//         pay = (hours - 40) * 12
//         document.write("Overpay for hours " + " " + (hours - 40) + " is " + pay)
//     } else {
//         document.write("OverPay is not applicable for Hours less than 40")
//     }
// }

// OvertimePay(45)


// Assign 38-42.10 

// var amount = prompt("Enter amount ?")

// function currencyNotes(amount) {
//     if (amount > 991) {
//         alert("Please enter a 3 digit number? ")
//     } else {
//         var hundred = amount.slice(0, 1);
//         var mainSlice = amount.slice(1, 2);
//         if (mainSlice >= 5) {
//             var ten = "1 fifty Note";
//         } else if (mainSlice < 5) {
//             var ten = "0 fifty notes";
//         }
//         if (mainSlice >= 1 && mainSlice < 5) {
//             var unit = mainSlice;
//             var unitA = unit + " Ten Notes";
//         } else if (mainSlice >= 6 && mainSlice <= 9) {
//             var unit = mainSlice - 5;
//             var unitA = unit + " Ten Notess"
//         } else if (mainSlice == 5) {
//             var unitA = "0 Ten Notes";
//         }
//         alert("You will have " + hundred + " Hundred Notes " + unitA + " and " + ten)
//     }
// }
// currencyNotes(amount)