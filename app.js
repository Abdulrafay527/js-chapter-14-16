
// var studentNames = [];   


// var studentNames = new Array();


// var furits = ["apple" , "banana" , "mango"];

// console.log(furits)


// var flags = [true, false, true];

// console.log(flags);


// let mixedArray = [42, "text", false, 5.5];
// console.log(mixedArray)


// // Declare and initialize the array
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Display the qualifications in the console
// console.log("Educational Qualifications in Pakistan:");
// for (var i = 0; i < qualifications.length; i++) {
//     console.log((i + 1) + ") " + qualifications[i]);
// }

// var studentName = ["Michael" , "jhon" ,"tony"];
// var score = [320 , 230 , 480 ];
// var percentage ;
// var userName = prompt("Enter your name");
// // var scpore = prompt("Enter you/r score")
// var totalMark = prompt("Define your total marks");
// if(userName == studentName[0]){
// percentage = score[0] / totalMark * 100
// alert(percentage)
// percentage = "";
// }   
// else if(userName == studentName[1]){
// percentage = score[1] / totalMark * 100
// alert(percentage)
// percentage = "";
// }
// else if(userName == studentName[2]){
//     percentage = score[2] / totalMark * 100
//     alert(percentage)
// percentage = "";

// }
// else{
// alert("not enrolled");
// };


// // ======= Part 6: Add color at user-defined index and show updated array =======

// // Step 1: Initial color array
// var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// // Step 2: Show original array
// var headingOriginal = document.createElement("h2");
// headingOriginal.textContent = "Original Color Array:";
// document.body.appendChild(headingOriginal);

// for (var i = 0; i < colors.length; i++) {
//   var p = document.createElement("p");
//   p.textContent = colors[i];
//   document.body.appendChild(p);
// }

// // Step 3: Ask user for index and color name
// var index = parseInt(prompt("Enter the index at which you want to add a new color:"));
// var newColor = prompt("Enter the color name you want to add:");

// // Step 4: Check if index is valid and add color
// if (!isNaN(index) && index >= 0 && index <= colors.length) {
//   colors.splice(index, 0, newColor); // Insert at desired index
// } else {
//   var err = document.createElement("p");
//   err.textContent = "Invalid index. Color not added.";
//   err.style.color = "red";
//   document.body.appendChild(err);
// }

// // Step 5: Show updated array
// var headingUpdated = document.createElement("h2");
// headingUpdated.textContent = "Updated Color Array (After Insertion):";
// document.body.appendChild(headingUpdated);

// for (var i = 0; i < colors.length; i++) {
//   var p2 = document.createElement("p");
//   p2.textContent = colors[i];
//   document.body.appendChild(p2);
// }



// // ======= Part 6: Add color at user-defined index and show updated array =======

// // Step 1: Initial color array
// var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// // Step 2: Show original array
// var headingOriginal = document.createElement("h2");
// headingOriginal.textContent = "Original Color Array:";
// document.body.appendChild(headingOriginal);

// for (var i = 0; i < colors.length; i++) {
//   var p = document.createElement("p");
//   p.textContent = colors[i];
//   document.body.appendChild(p);
// }

// // Step 3: Ask user for index and number of colors to delete
// var deleteIndex = parseInt(prompt("Enter the index from which you want to delete color(s):"));
// var deleteCount = parseInt(prompt("Enter how many colors you want to delete:"));

// // Step 4: Validate and delete
// if (!isNaN(deleteIndex) && !isNaN(deleteCount) && deleteIndex >= 0 && deleteIndex < colors.length && deleteCount >= 0) {
//   colors.splice(deleteIndex, deleteCount); // Remove colors
// } else {
//   var err = document.createElement("p");
//   err.textContent = "Invalid input. No colors were deleted.";
//   err.style.color = "red";
//   document.body.appendChild(err);
// }

// // Step 5: Show updated array
// var headingUpdated = document.createElement("h2");
// headingUpdated.textContent = "Updated Color Array (After Deletion):";
// document.body.appendChild(headingUpdated);

// for (var i = 0; i < colors.length; i++) {
//   var p2 = document.createElement("p");
//   p2.textContent = colors[i];
//   document.body.appendChild(p2);
// }


// // Step 1: Store student scores in an array
// var studentScores = [85, 72, 90, 65, 78, 95, 88];

// // Step 2: Display original scores
// console.log("Original student scores:", studentScores);

// // Step 3: Sort the array in ascending order
// studentScores.sort(function(a, b) {
//   return a - b;
// });

// // Step 4: Display sorted scores
// console.log("Sorted student scores (ascending):", studentScores);










