function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question code
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show question option 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your Scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("Which of the following are object oriented languages?", ["Java", "Cobol", "C++", "C"], "C++"),
    new Question("In programming, a series of logically ordered steps that lead to a required result is called?", ["a compiler", "a program", "a data structure", "an algorithm"], "an algorithm"),
    new Question("What kind of languages are Cobol, Java, C# and Basic?", ["1GL", "2GL", "3GL", "4GL"], "3GL"),
    new Question("Which is a typical language for programming inside Web pages?", ["JavaScript", "HTML", "Cobol", "Cobol"], "JavaScript"),
    new Question("Which of the following converts source code into machine code at each runtime?", ["linker", "compiler", "interpreter", "object encoder"], "interpreter")
];

var quiz = new Quiz(questions);

populate();