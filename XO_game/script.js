let title = document.querySelector(".title");
let turn = "x";
let squares = [];
let check = 0;

// end game function to end the game announcing winner and reloading game.
function endgame(num1, num2, num3)
{
    title.innerHTML = `${squares[num1]} is the winner`;
    document.getElementById("item" + num1).style.background = "#000";
    document.getElementById("item" + num2).style.background = "#000";
    document.getElementById("item" + num3).style.background = "#000";

    setInterval(function(){title.innerHTML += "."}, 600);
    setTimeout(function(){location.reload()}, 2000);
}
function drawgame(num1, num2, num3,num4, num5, num6,num7, num8, num9)
{
    
    title.innerHTML = `DRAW`;

    document.getElementById("item" + num1).style.background = "#000";
    document.getElementById("item" + num2).style.background = "#000";
    document.getElementById("item" + num3).style.background = "#000";
    document.getElementById("item" + num4).style.background = "#000";
    document.getElementById("item" + num5).style.background = "#000";
    document.getElementById("item" + num6).style.background = "#000";
    document.getElementById("item" + num7).style.background = "#000";
    document.getElementById("item" + num8).style.background = "#000";
    document.getElementById("item" + num9).style.background = "#000";

    setInterval(function(){title.innerHTML += "."}, 600);
    setTimeout(function(){location.reload()}, 2000);
    
}
function winner()
{
    // iterate through squares var. to get all items.
    for(let i = 1; i<10; i++)
    {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    
    // comparing and functianality.
    // rows.
    if(squares[1] == squares [2] && squares[2] == squares[3] && squares[1] != "")
    {
        endgame(1,2,3);
    }
    else if(squares[4] == squares [5] && squares[5] == squares[6] && squares[5] != "")
    {
        endgame(4,5,6);
    }
    else if(squares[7] == squares [8] && squares[8] == squares[9] && squares[8] != "")
    {
        endgame(7,8,9);
    }
    // columns.
    else if(squares[1] == squares [4] && squares[4] == squares[7] && squares[4] != "")
    {
        endgame(1,4,7);
    }
    else if(squares[2] == squares [5] && squares[5] == squares[8] && squares[5] != "")
    {
        endgame(2,5,8);
    }
    else if(squares[3] == squares [6] && squares[6] == squares[9] && squares[6] != "")
    {
        endgame(3,6,9);
    }
    // cross.
    else if(squares[1] == squares [5] && squares[5] == squares[9] && squares[5] != "")
    {
        endgame(1,5,9);
    }
    else if(squares[3] == squares [5] && squares[5] == squares[7] && squares[5] != "")
    {
        endgame(3,5,7);
    }
    else if(check == 9){
        drawgame(1,2,3,4,5,6,7,8,9);
    }
    
}
function game(id)
{
    // function to type our input when we click on spaces.
    let element = document.getElementById(id);
    if(turn === "x" && element.innerHTML == "")
    {
        element.innerHTML = "X";
        turn = "o";
        title.innerHTML = "O's turn";
    }
    else if(turn === "o" && element.innerHTML == "")
    {
        element.innerHTML = "O";
        turn = "x";
        title.innerHTML = "X's turn";
    }
    
    check ++
    winner();
}