// Step 1: Remove the <main id="main"> element
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set its id to 'victory'
newHeader.id = "victory";

// Step 4: Set the text content (replace YOUR-NAME with your actual name)
newHeader.textContent = "Calton Maina is the champion";

// Step 5: Append it to the body
document.body.appendChild(newHeader);
