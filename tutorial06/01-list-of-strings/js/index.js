const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];


// use a for / of loop to loop through each element
// of the names array and output a message to the screen:
// document.write("<p>Welcome, " + names[0] + "!</p>");
// document.write("<p>Welcome, " + names[1] + "!</p>");
// document.write("<p>Welcome, " + names[2] + "!</p>");

for (name of names) {
  document.write("<p>Welcome, " + name + "!</p>");
}
