console.log('var the game creation begin')

// //Get all elements
//var player = document.querySelector('#yourName');
//var time = document.querySelector('#timer');
//var startGame = document.querySelector('#startGame');
//var domande = document.querySelector('#question');
//var answers = document.querySelector('#answerlist');

//Call function onload of windows
window.onload = function () {
    //Setvariables
    
    var timeCounter = 0;
    var changeQuestion = 0;
    var interval;
      //Get and create elements
    var container = document.querySelector('#container');
    //Timer elemnt
    var timeEl = document.querySelector('#timeMachine');

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
    console.log('Button is working')
    //Take button off on click to start game
    gameButton.style.display = 'none';
    interval = setInterval(function () {
        // timeCounter++;
        timeEl.textContent = `00:${timeCounter++}`;
        //Clear interval
        if (timeCounter === 5) {
            changeQuestion++;
            setQuestionsAnswer();
            clearInterval(interval)
             }
     }, 1000);
  
    })

}

function setQuestionsAnswer() {
    console.log('Question 1')
}
//quiz questions
var questions = [
    {
        title: "The beaver is the national emblem of which country?",
        choices: ["Canada", "Mexico", "Spain", "Peru"],
        answer: "Canada"
    },
    {
        title: "In which movie did Humphrey Bogart play Charlie Allnut?",
        choices: ["It's a Wonderful Life", "Little Miss Sunshine", "African Queen", "Jaws"],
        answer: "African Queen"
    },
    {
        title: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
        choices: ["Cher", "Lady Gaga", "Madonna", "Christina Aguilera"],
        answer: "Lady Gaga"
    },
    {
        title: "How many players are there in a baseball team?",
        choices: ["Twelve", "Six", "Eleven", "Nine"],
        answer: "Nine"
    },
    {
        title: "Which TV show said, “Live long and prosper”?",
        choices: ["Star Wars", "Star Treck", "Seinfeld", "Cheers"],
        answer: "Star Treck"
    },
    {
        title: "What kind of person shall not be honored on a US postal stamp, according to the US postal service and the Citizen’s Stamp Advisory Commitee?",
        choices: ["A living person", "A dead person", "Any person", "A foreign person"],
        answer: "A living person"
    },
    {
        title: "What is the name of Batman’s butler?",
        choices: ["Geeves", "Frederick", "Alf", "Alfred"],
        answer: "Alfred"
    },
    {
        title: "The average human body contains how many pints of blood?",
        choices: ["Eight", "Nine", "Ten", "Eleven"],
        answer: "Nine"
    },
    {
        title: "Which US state is nearest to the old Soviet Union?",
        choices: ["Ohio", "New Hampshire", "Alaska", "Hawaii"],
        answer: "Alaska"
    },
    {
        title: "In which city is Jim Morrison buried?",
        choices: ["Tokyo", "London", "Paris", "New York"],
        answer: "Paris"
    },
    {
        title: "Hg is the chemical symbol of which element?",
        choices: ["Mercury", "Hyglorine", "Lead", "Hydrogen"],
        answer: "Mercury"
    },
    {
        title: "The Pyrenees mountain range separates which two European countries?",
        choices: ["Germany and Poland", "France and Spain", "Spain and Ireland", "US and Canada"],
        answer: "France and Spain"
    },
    {
        title: "Which movie features the song Ding Dong The Witch Is Dead?",
        choices: ["Alice in Wonderland", "Wizard of Oz", "The Lion King", "The Matrix"],
        answer: "Wizard of Oz"
    },
    {
        title: "In Fahrenheit, at what temperature does water freeze?",
        choices: ["32", "0", "12", "-4"],
        answer: "32"
    },
    {
        title: "What is Chandler’s last name in the sitcom Friends?",
        choices: ["Bang", "Bong", "Bung", "Bing"],
        answer: "Bing"
    },
]

// startGame.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('code')
// })