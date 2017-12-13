// AUTHOR: Jin Tak 
// TITLE: Space Racer 2: Into the Void
// WDI 6: Project 1 
// Game Page 


// This Object holds properties which describe the position of Player 1
let player1 = {
    left: 0,
    bottom: 0
}

// This Object holds properties which describe the position of Player 2
let player2 = {
    right: 0,
    bottom: 0
}

// This array will hold the projectiles for Player 1
let projectilesArrayPlayer1 = [];
// This array will hold the projectiles for Player 2
let projectilesArrayPlayer2 = [];
// This array will hold all of the asteroids
let asteroidArray = [
    {

    },
    {},
    {},
    {}
];

// This function will listen for specific 'keyup' events which will move the game pieces.
document.addEventListener('keyup', function(e){
    // console.log((document.getElementById('player1').style.bottom));
   
    // let positionStr = document.getElementById('player1').style.bottom;
    // let bottom = parseInt(positionStr.slice(0,positionStr.length - 2));
    
    // console.log(positionStr);
    // // let bottom = parseInt(positionStr.slice(0,positionStr.length - 2));

    // if(!positionStr === "") {
    //     let bottom = parseInt(positionStr.slice(0,positionStr.length - 2));
    // } else {
    //     bottom = 0;
    // }

    // console.log(bottom);

    // trying to prevent div from going higher than 50vh
    // if(!bottom > 290) {
    //     if(e.keyCode === 65){
    //         // console.log('left');
    //         player1.left = player1.left - 10;
    //         movePlayer();
    //     } else if (e.keyCode === 68){
    //         // console.log('right');
    //         player1.left = player1.left + 10;
    //         movePlayer();
    //     } else if (e.keyCode === 87){
    //         // console.log('up');
    //         player1.bottom = player1.bottom + 10;
    //         movePlayer();
    //     }
    //     else if (e.keyCode === 83){
    //         // console.log('down');
    //         player1.bottom = player1.bottom - 10;
    //         movePlayer();
    //     }
    // }
    
    // MOVEMENT for Player 1
    if(e.keyCode === 65){
        // console.log('left');
        player1.left = player1.left - 10;
        movePlayer();
    } else if (e.keyCode === 68){
        // console.log('right');
        player1.left = player1.left + 10;
        movePlayer();
    } else if (e.keyCode === 87){
        // console.log('up');
        player1.bottom = player1.bottom + 10;
        movePlayer();
    }
    else if (e.keyCode === 83){
        // console.log('down');
        player1.bottom = player1.bottom - 10;
        movePlayer();
    } 

    // MOVEMENT for Player 2
    else if(e.keyCode === 37){
        // console.log('left');
        player2.right = player2.right + 10;
        movePlayer();
    } else if (e.keyCode === 39){
        // console.log('right');
        player2.right = player2.right - 10;
        movePlayer();
    } else if (e.keyCode === 38){
        // console.log('up');
        player2.bottom = player2.bottom + 10;
        movePlayer();
    }
    else if (e.keyCode === 40){
        // console.log('down');
        player2.bottom = player2.bottom - 10;
        movePlayer();
    }
    // Shooting for Player 1
    // I am pushing a new projectile object onto an array each time the player 'shoots'
    else if (e.keyCode === 71){
        projectilesArrayPlayer1.push({
            left: player1.left + 45,
            bottom: player1.bottom + 100
        });

        console.log("Player 1: pew pew!");
        console.log(projectilesArrayPlayer1);
        drawProjectiles();
    } 
    // Shooting for Player 2
    // I am pushing a new projectile object onto an array each time the player 'shoots'
    else if (e.keyCode === 76){
        projectilesArrayPlayer2.push({
            right: player2.right + 45,
            bottom: player2.bottom + 100
        });

        console.log("Player 2: pew pew!");
        console.log(projectilesArrayPlayer2);
        drawProjectiles();
    }
});

// Running our game loop which will move our projectiles once they are fired
updateProjectiles();



// =====================================
// START OF FUNCTION DEFINITIONS
// =====================================

// Function to move the player left, right, up, and down.
function movePlayer(){
    let playerOne = document.getElementById('player1');
    let playerTwo = document.getElementById('player2');
    playerOne.style.left = player1.left + "px";
    playerOne.style.bottom = player1.bottom + "px";

    playerTwo.style.right = player2.right + "px";
    playerTwo.style.bottom = player2.bottom + "px";


}

// This function is responsible for dynamically adding a projectile to the DOM with the correct absolute positioning values.
function drawProjectiles(){
    document.getElementById('projectilesPlayer1').innerHTML = "";
    
    var id = 0; // This variable is used to give each projectile for Player 1 its own id
    var pd = 0; // This variable is used to give each projectile for Player 2 its own id
    for(var i = 0; i < projectilesArrayPlayer1.length; i++){
        document.getElementById('projectilesPlayer1').innerHTML += "<div id='" + id + "' class='projectileStyleForPlayer1' style='left:" + projectilesArrayPlayer1[i].left + "px;" + "bottom:" + projectilesArrayPlayer1[i].bottom + "px;" + "'></div>";   
        id++;     
    }

    document.getElementById('projectilesPlayer2').innerHTML = "";
    for(var i = 0; i < projectilesArrayPlayer2.length; i++){
        document.getElementById('projectilesPlayer2').innerHTML += "<div id='" + pd + "' class='projectileStyleForPlayer2' style='right:" + projectilesArrayPlayer2[i].right + "px;" + "bottom:" + projectilesArrayPlayer2[i].bottom + "px;" + "'></div>";        
        pd++
    }
    
}

// This function will be responsible running the moveProjectiles() function
function updateProjectiles(){
    setTimeout(updateProjectiles, 20);
    drawProjectiles();
    moveProjectiles();
    hitDetection();
}

// This function will be responsible for updating the coordinates of the projectiles  
function moveProjectiles(){
    // console.log('game loop running....')
    
    for(let i = 0; i < projectilesArrayPlayer1.length; i++){
        
        projectilesArrayPlayer1[i].bottom += 10;
        // drawProjectiles();
        // console.log(typeof(projectilesArrayPlayer1[i].bottom));
    }
    
    for(let i = 0; i < projectilesArrayPlayer2.length; i++){
        projectilesArrayPlayer2[i].bottom += 10;
        // drawProjectiles();
        // console.log(projectilesArrayPlayer2[i].bottom);
    }
    
    // This 'for' loop will remove player 1's projectiles from its array once it has moved off the screen
    for(let i = 0; i < projectilesArrayPlayer1.length; i++){
        if(projectilesArrayPlayer1[i].bottom > 800){
            let index  = projectilesArrayPlayer1.indexOf(projectilesArrayPlayer1[i]);
            if(index != -1){
                projectilesArrayPlayer1.splice(index, 1);
            }
        } 
    }
    // This 'for' loop will remove player 2's projectiles from its array once it has moved off the screen
    for(let i = 0; i < projectilesArrayPlayer2.length; i++){
        if(projectilesArrayPlayer2[i].bottom > 800){
            let index  = projectilesArrayPlayer2.indexOf(projectilesArrayPlayer2[i]);
            if(index != -1){
                projectilesArrayPlayer2.splice(index, 1);
            }
        }
    } 
}

function hitDetection() {
    let asteroid = document.getElementById('asteroidBelt');

    if(asteroid){
        let asteroidDOM = asteroid.getBoundingClientRect();
        for(let x = 0; x < projectilesArrayPlayer1.length; x++){
            let missile = document.getElementById(x);
            let missileDOM = missile.getBoundingClientRect();
    
            if(missileDOM.bottom <= asteroidDOM.bottom && missileDOM.right < asteroidDOM.right && missileDOM.left > asteroidDOM.left){
                console.log('PLayer 1 HIT!');
                asteroid.remove();
                projectilesArrayPlayer1.splice(projectilesArrayPlayer1[x], 1);
            }
            // console.log(missileDOM);
        }
    
        for(let y = 0; y < projectilesArrayPlayer2.length; y++){
            let missile = document.getElementById(y);
            let missileDOM = missile.getBoundingClientRect();
    
            if(missileDOM.bottom <= asteroidDOM.bottom && missileDOM.right < asteroidDOM.right && missileDOM.left > asteroidDOM.left){
                console.log('PLayer 1 HIT!');
                asteroid.remove();
                projectilesArrayPlayer2.splice(projectilesArrayPlayer1[y], 1);
            }
            // console.log(missileDOM);
        }
    }
    

    
}



