console.log('var the game creation begin')


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

    var answerGround = document.querySelector('#answerList');

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
    setQuestionsAnswer();
    })

    function setQuestionsAnswer() {
        console.log('Question 1')
        // var count = 0;
      
        var ask = document.querySelector('#question');
       
        randomQuestion()
          //Get the time working
          interval = setInterval(function () {
            timeCounter++;
            timeEl.textContent = `00:${timeCounter}`
              if (timeCounter === 5) {
                randomQuestion();
                clearInterval(interval)
            }
        },1000)
        ask.textContent = questions[randomQuestion()].title;

        ansList = questions[randomQuestion()].choices;
        console.log(ansList)

        for (var i = 0; i < ansList.length; i++){
            console.log(ansList[i])
            var li = document.createElement('li');
            li.innerHTML += `${ansList[i]} <br>`
            answerGround.append(li);

        }

    }
        //Call random questions
        function randomQuestion() {
            var questionsNow = Math.floor(Math.random() * questions.length)
            console.log(questionsNow)
            return questionsNow;
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
    },
    {
        title: "Who is the next president of Cameroon?",
        choices: ["Tochiskool of Italy", "Paul Biya again", "Kawala Muna", "Fosung Divine"],
        answer: "Tochiskool of Italy"
    },
    {
        title: "who is Camaeroon's next best future 9 shirted player of Cameroon”?",
        choices: ["Tita Jake", "Rudy Ngwa", "Abaela Joel", "Aziz Rudar"],
        answer: "Star Treck"
    },
    {
        title: "Who do you wanna be in love with right here right now?",
        choices: ["A living person", "A dead person", "Any person", "A foreign person"],
        answer: "A living person"
    },
    {
        title: "When is Tochiskool's birthday?",
        choices: ["31's of March", "17th of May", "15th of June", "16th of September"],
        answer: "Alfred"
    },
    {
        title: "Who abandons her children with mean grand parents?",
        choices: ["A mean mother", "A senseless mother", "An empty head woman", "A cheap woman", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "Where was Amalia born?",
        choices: ["Ohio", "Limbe", "Alaska", "Hawaii"],
        answer: "Limbe"
    },
    {
        title: "Where was Tita Jake born",
        choices: ["Tokyo", "London", "Trieste", "New York"],
        answer: "Trieste"
    },
    {
        title: "Who do you know that sabi waka lie pass all?",
        choices: ["The Ndi's ", "The Ngwa's", "The Zazuze", "The Lokomida"],
        answer: "Mercury"
    },
    {
        title: "If there is so much cold with who do you want to be?",
        choices: ["Divine de Massacheusette", "Tochiskool of Italy", " Jazy of Bende", "Nello of London"],
        answer: "Jazy of Bende"
    },
    {
        title: "Who is 2022's current president of USAS?",
        choices: ["Awemu Ama", "Donald J Trump", "Sleepy Joe Biden", "Kim Trumps Friend"],
        answer: "Donald J Trump"
    },
    {
        title: "In Fahrenheit, at what temperature does water freeze?",
        choices: ["32", "0", "12", "-4"],
        answer: "32"
    },
    {
        title: "Who is the most wash waka turn turn man you know ?",
        choices: ["Nukila Bravo", "Bongo Jesly", "Rororo Etong", "Blinko Hamburk"],
        answer: "Nukila Bravo"
    },
]

// startGame.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('code')
// })