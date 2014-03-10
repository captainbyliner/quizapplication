

var questions = [{
	text: 'How many majors did Ben Hogan win?',
	answers: ['18 Majors', '14 Majors', '19 Majors', '16 Majors'],
	style: {backgroundColor:"green"},
	correctAnswer: 0
},{
	text: 'What is the highest recorded Par 4 score in a PGA Tour event?',
	answers: ['12', '16', '15', '18'],
	style: {backgroundColor:"magenta"},
	correctAnswer:1
},{
	text: 'Who has won the most British Open titles?',
	answers: ['Tiger Woods', 'Harry Vardon', 'Tom Watson', 'Old Tom Morris'],
	style: {backgroundColor:"orange"},
	correctAnswer:1
},{
	text: 'Who said "The only thing a golfer needs is more sunlight?"',
	answers: ['Raymond Floyd', 'Tom Watson', 'Bagger Vance', 'Ben Hogan'],
	style: {backgroundColor:"purple"},
	correctAnswer:3
},{
	text: 'What is the maximum number of clubs a golfer can carry?',
	answers:['12', '15', '14', '16'],
	style:{backgroundColor:"yellow"},
	correctAnswer:2
}];

var questionKey = 0;

function displayQuestion(key) {

	var question = questions[key];

	var questionNumber = key + 1;

	$(".panel").css(question.style);

	$("#questionDeck").text(question.text);

	$("#answers").empty();

	for (var answerKey = 0, totalAnswers = question.answers.length;
		answerKey < totalAnswers;
		answerKey++)

    {
    	var answer = question.answers[answerKey];

 	$("#answers").append("<li><input type='radio' name ='answers'" + 
 						 "value='" + answerKey + "')/> " + answer + "</li>");
        
	}
}


$(document).ready(function() {

	displayQuestion(questionKey);

   $("#addAnswer").on('click', function() {

      	var selectedAnswer = $("#answers input[type='radio']:checked").val()

   		var question = questions[questionKey];

   		if (selectedAnswer == undefined) {
   			console.log("choose a number")
   		}


 		if (selectedAnswer == questions.correctAnswer) {
 			console.log("You are correct");
 		} else {
 			console.log("Nope, you are wrong");
 		}

 		questionKey++;
		if (questionKey < 0) {
			questionKey = 0;
		}

		displayQuestion(questionKey);
   
    });    

 });


    
    