// JavaScript for user input capture and display
function captureInput() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("displayInput").innerHTML = "User Input: " + userInput;
}
function showProductDetails() {
    // Get user inputs
    var size = document.getElementById("sizeInput").value;
    var details = document.getElementById("detailsInput").value;
    var color = document.getElementById("colorInput").value;

    // Display details on the page
    var productDetails = "Product Size: " + size + "<br>Details: " + details + "<br>Color: " + color;
    document.getElementById("productDetails").innerHTML = productDetails;
}