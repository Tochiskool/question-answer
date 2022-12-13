console.log('var the game creation begin')


//Call function onload of windows
window.onload = function () {
    //Setvariables
    
    var timeCounter = 0;
    var changeQuestion = 0;
    var setId = 0;
    var interval;
      //Get and create elements
    var container = document.querySelector('#container');
    //Timer elemnt
    var timeEl = document.querySelector('#timeMachine');
    //Question elements 
    var ansList = document.querySelector('#answerList');
    var askNow = document.querySelector('#question')
    var header = document.createElement('header');
    var h1 = document.createElement('h1');
    //Game start button
    var gameButton = document.createElement('button');
    var buttonParent = document.querySelector('#buttonSection');
    var timeButton = document.createElement('button');//play game button
    var button = document.createElement('button');//enter game button
    var input = document.createElement('input');
    button.textContent = `Start Game`
    button.setAttribute('class', 'buttonEl');
    input.setAttribute('id', 'name');
     //Get input value 
//    var name = input.value;
      //set placeholder in input element
    input.placeholder = `Enter name`;
    buttonParent.append(input)
    buttonParent.append(button);

    
document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();

    gameButton.setAttribute('class', 'buttonEl');
    gameButton.setAttribute('id', 'playGame');

    // Input Element created dynamically.
   var input1 = document.querySelector('input');
   var realName = input1.value;
    console.log(input1.id, realName ,input1)
   
    h1.textContent = `Thanks for taking out coding quiz game ${realName}`;
    gameButton.textContent = `Play game now ${realName}`;
    header.append(h1);
    header.append(gameButton)
    timeButton.textContent = `Start game Now ${realName}`;
    buttonParent.append(timeButton);
    //take it off page
    buttonParent.style.display = "none"; 
   
   //Append elements in container element;
    container.append(header);

    //Tell user to input a valid name
    if (realName === "") {
        gameButton.style.display = 'none';
        return h1.textContent = `Please enter a valid name`;
    }

})
gameButton.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('start game')
    //get answer lis ul
    
    presentQuestions()
})

    function presentQuestions() {
    
        interval = setInterval(function () {
            timeCounter++;
            timeEl.textContent = timeCounter;
           
        }, 1000)
        askNow.innerHTML = " ";
        ansList.innerHTML = " ";
        for (var i = 0; i < questions.length; i++){
            var displayQuestion = questions[changeQuestion].title;
            var displayListQues = questions[changeQuestion].choices;
            askNow.innerHTML = displayQuestion;
        }
        displayListQues.forEach(function (domanda) {
            // setId++;
            var li = document.createElement('li');
            li.setAttribute('id', setId++);
            li.textContent += domanda;
            ansList.append(li);
            li.addEventListener('click', function (e) {
                e.preventDefault();
    
                if (e.target.matches('li')) {
                    console.log('You clicked an li', li)
                }
            })
        })
    }
}



//quiz questions
var questions = [
    {
        title: "Which is the best country in Africa?",
        choices: ["Egypt", "Cameroon", "Morocco", "Nigeria"],
        answer: "Cameroon"
    },
    {
        title: "Who is the president of the Cameroon football federation?",
        choices: ["Tochiskool", "Samuel Eto'o ", "Mila Roger", "Aboubae Vincent"],
        answer: "Samuel Eto'o"
    },
    {
        title: "Highest African goal scorer in the AfCOM?",
        choices: ["Eto'o Fils", "Kanu Nwanko", "George Wehya", "Aboubae Vincent"],
        answer: "Aboubae Vincent"
    }
]

// startGame.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('code')
// })