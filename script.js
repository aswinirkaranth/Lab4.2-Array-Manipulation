/*Task 1: Array Manipulation Basics
Create an empty array called shoppingList.
Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
Write a function called removeLastItem that removes the last item from the shoppingList array.
Write a function called displayList that logs all items in the shoppingList array to the console.
Task 2: Filter and Search an Array
Modify the addItem function to only add the item if it is not already in the shoppingList array.
Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).
Task 3: Render the List in the Browser
Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.
*/


/* Declare empty array */
let shoppingList =[];

let filteredList = [];

/*Variable to store if item exist in shopping list or not*/
let isPresent = false;

/*Event listener */
let additem =document.getElementById("add-item");
let removeitem =document.getElementById("remove-item");

additem.addEventListener("click", function() {
    /* Item accepted as user input */
let item = document.getElementById("user-item").value;
	addItem(item);
  
});

removeitem.addEventListener("click", function() {
	removeLastItem();
});
/*Function to add items*/
function addItem(item){
  /*Check for duplicates before deciding to add to array*/
  filterItems(item);

  /*Add item to array if no dupllicates present*/
  if(isPresent == false){
  shoppingList.push(item);
  /* Resetting the value of isPresent
   because otherwise no new items get added 
   to list as isPresent remains true*/
   isPresent = false;
  }

  displayList();
  // for(let i=0; i< shoppingList.length;i++){
  // console.log(shoppingList[i])
  // }
  
}
/*Function to remove last item*/
function removeLastItem(){
  shoppingList.pop();
//   for(let listitem of shoppingList){
//     console.log(listitem);
//   }
  displayList();
}
/*Log all items to console*/
function displayList(){
  console.log("Display shopping list");
for(let listitem of shoppingList){
    console.log(listitem);
}
}
/*Filter items*/
function filterItems(item){
  
  /* Iterate to check if item already exist in shopping list */
 for(let i=0; i<shoppingList.length; i++){
    if(item === shoppingList[i]){
      //add to a new array to display
      filteredList.push(shoppingList[i]);
      isPresent = true;
    }
 }
 /* show filtered list in console*/
 console.log("Displaying filteredList");
 for(let filteritem of filteredList){
    console.log(filteritem);
}
}
