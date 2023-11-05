function doConvert(event)
 {
    event.preventDefault();
    // Get the value of yard input
    var yard = parseFloat(document.getElementById("yard").value);
    
    // Conversion factor: 1 yard is equal to 9 square feet
    var squareFeet = yard * 9;
    
    // Display the result on the screen
    document.getElementById("result").innerHTML = yard + " yard = " + squareFeet + " Square Feet.";
}