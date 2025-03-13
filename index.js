// Write your code here!
// 1. Remove the existing <main> element
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// 2. Create a new <h1> element
const newHeader = document.createElement("h1");

// 3. Set the id of the new <h1> to "victory"
newHeader.id = "victory";

// 4. Set the text content of the new <h1>
newHeader.textContent = "Your Name is the champion"; // Replace "Your Name" with your actual name

// 5. Append the new <h1> to the body
document.body.appendChild(newHeader);

// 6. Create a new <div> element
const div = document.createElement("div");

// 7. Create an unordered list <ul>
const ul = document.createElement("ul");

// 8. Use a loop to create and append three <li> elements
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = i.toString();
  ul.appendChild(li);
}

// 9. Append the <ul> to the <div>
div.appendChild(ul);

// 10. Append the <div> to the body
document.body.appendChild(div);

// 11. Change properties of an element
newHeader.style.color = "blue"; // Change text color to blue
newHeader.style.fontSize = "24px"; // Change font size
newHeader.style.textAlign = "center"; // Center align the text
newHeader.classList.add("highlighted"); // Add a class to the header

// 12. Remove one <li> from the list
const secondChild = ul.querySelector("li:nth-child(2)");
if (secondChild) {
  secondChild.remove();
}

// 13. Log final DOM structure (for debugging)
console.log(document.body.innerHTML);
