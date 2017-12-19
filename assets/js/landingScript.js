// This JS file is responsible for displaying the Instructions Modal

// Get Modal Element
let modal = document.getElementById('instructionsModal');

// Get Modal Button
let modalButton = document.getElementById('modalBtn');

// Get Modal Close Button
let modalCloseButton = document.getElementById('closeBtn');


// Show modal when 'Instructions' button is clicked
modalButton.addEventListener('click', function() {
    modal.style.display = "block";
})

// Close modal when 'x' is clicked
modalCloseButton.addEventListener('click', function() {
    modal.style.display = "none";
})

// Close modal if user clicks outside of modal
window.addEventListener('click', function(e) {
    if(e.target == modal){
        modal.style.display = "none";
    }
    
})

// This function controls the background audio volume
function setHalfVolume() {
    var myAudio = document.getElementById("background-music");  
    myAudio.volume = 0.5; 
}