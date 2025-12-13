// Select DOM elements
let nameBox = document.querySelector("#name_box");  // Input for name
let reveal_btn = document.querySelector("#reveal_btn");  // Button to trigger check
let desired_name = "kaushik";  // Correct name to match
let card = document.querySelector(".card");  // Element to show on success
let hideInput = document.querySelector(".hideOnClick");  // Input to hide after correct name
let errorMessage = document.querySelector(".errorMessage");  // Error message display

// Function to check entered name
function checkName() {
    let nameBoxVal = nameBox.value.toLowerCase().trim();  // Get and format input

    // If the name is correct, show success
    if (nameBoxVal == desired_name) {
        document.body.classList.add("background_show");  // Change background
        card.classList.add("show");  // Show card
        card.style.display = "flex";  // Make card visible
        hideInput.style.display = "none";  // Hide input box
        errorMessage.style.display = "none";  // Hide error message
        confetti();  // Trigger confetti effect
    }
    // If no name entered, show input prompt
    else if (nameBoxVal == "") {
        errorMessage.style.display = "block";  // Show error
        errorMessage.textContent = "Please enter your name";  // Prompt for input
    }
    // If the name is incorrect, show failure message
    else {
        errorMessage.style.display = "block";  // Show error
        errorMessage.textContent = "This is not the desired name, Please try again";  // Incorrect name message
        nameBox.value = "";  // Clear input
    }
}

// Event listeners
reveal_btn.addEventListener("click", checkName);  // On button click, check name
nameBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") checkName();  // On Enter key press, check name
});
