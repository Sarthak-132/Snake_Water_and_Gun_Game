let btn = document.getElementById('btn');
let output = document.getElementById('output');
let computer = ['s','w','g']
let computer_input = computer[Math.floor(Math.random()*computer.length)];

btn.addEventListener("click", function() {
    let user_input = document.getElementById('input').value;
    if(user_input===''){
        output.innerHTML = 'Type something';
    }
    else if(user_input === computer_input){
        output.innerHTML = 'OOPS! Match Tie';
    }
    else if(user_input === 's' && computer_input === 'w'){
        output.innerHTML = 'Congrats! You Won the Game';
    }
    else if(user_input === 's' && computer_input === 'g'){
        output.innerHTML = 'Bad luck! Computer Won... Try again';
    }
    else if(user_input === 'w' && computer_input === 's'){
        output.innerHTML = 'Bad luck! Computer Won... Try again';
    }
    else if(user_input === 'w' && computer_input === 'g'){
        output.innerHTML = 'Congrats! You Won the Game';
    }
    else if(user_input === 'g' && computer_input === 'w'){
        output.innerHTML = 'Bad luck! Computer Won... Try again';
    }
    else if(user_input === 'g' && computer_input === 's'){
        output.innerHTML = 'Congrats! You Won the Game';
    }
    else{
        output.innerHTML = "This is invalid.... Please enter valid string";
    }
});


