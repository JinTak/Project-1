// Author: Jin Tak 
// WDI 6: Project 1 
// Game Page 

let player1 = {
    left: 0,
    bottom: 0
}

let player2 = {
    right: 0,
    bottom: 0
}

let projectilesPlayer1 = [];
let projectilesPlayer2 = [];

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
    // Shooting for player1
    else if (e.keyCode === 71){
        projectilesPlayer1.push({
            left: player1.left + 45,
            bottom: player1.bottom + 100
        });

        console.log("Player 1: pew pew!");
        // console.log(projectilesPlayer1);
        drawProjectiles();

    // Shooting for player2
    } else if (e.keyCode === 76){
        projectilesPlayer2.push({
            right: player2.right + 45,
            bottom: player2.bottom + 100
        });

        console.log("Player 2: pew pew!");
        console.log(projectilesPlayer2);
        drawProjectiles();
    }

});

// Function to move the player left, right, up, and down.
function movePlayer(){
    let playerOne = document.getElementById('player1');
    let playerTwo = document.getElementById('player2');
    playerOne.style.left = player1.left + "px";
    playerOne.style.bottom = player1.bottom + "px";

    playerTwo.style.right = player2.right + "px";
    playerTwo.style.bottom = player2.bottom + "px";


}

function drawProjectiles(){
    document.getElementById('projectilesPlayer1').innerHTML = "";
    for(var i = 0; i < projectilesPlayer1.length; i++){
        document.getElementById('projectilesPlayer1').innerHTML += "<div class='projectileStyleForPLayer1' style='left:" + projectilesPlayer1[i].left + "px;" + "bottom:" + projectilesPlayer1[i].bottom + "px;" + "'></div>";        
    }

    document.getElementById('projectilesPlayer2').innerHTML = "";
    for(var i = 0; i < projectilesPlayer2.length; i++){
        document.getElementById('projectilesPlayer2').innerHTML += "<div class='projectileStyleForPlayer2' style='right:" + projectilesPlayer2[i].right + "px;" + "bottom:" + projectilesPlayer2[i].bottom + "px;" + "'></div>";        
    }
    
}



