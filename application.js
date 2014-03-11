

var questions = [{
	text: 'How many majors did Jack Nicklaus win?',
	answers: ['18 Majors', '14 Majors', '19 Majors', '16 Majors'],
	style: {backgroundColor:"green"},
	holeNumber: 'Hole #1: A short dog leg to the right, Par 4',
	correctAnswer: 0
},{
	text: 'The highest Par 4 score in a PGA Tour event?',
	answers: ['12', '16', '15', '18'],
	style: {backgroundColor:"magenta"},
	holeNumber: 'Hole #2: A short, well-bunkered Par 3',
	correctAnswer:1
},{
	text: 'Who has won the most British Open titles?',
	answers: ['Tiger Woods', 'Harry Vardon', 'Tom Watson', 'Old Tom Morris'],
	style: {backgroundColor:"orange"},
	holeNumber: 'Hole #3: A Par 4, reminiscent of the Road Hole',
	correctAnswer:1
},{
	text: 'Who said "The only thing a golfer needs is more sunlight?"',
	answers: ['Raymond Floyd', 'Tom Watson', 'Bagger Vance', 'Ben Hogan'],
	style: {backgroundColor:"purple"},
	holeNumber: 'Hole #4: A straightaway Par 5 flanked by fescue',
	correctAnswer:3
},{
	text: 'What is the maximum number of clubs a golfer can carry?',
	answers:['12', '15', '14', '16'],
	style:{backgroundColor:"yellow"},
	holeNumber: 'Hole #5: A reachable Par 5 if you have no fear',
	correctAnswer:2
}];

var questionKey = 0;

function displayQuestion(key) {

	var question = questions[key];

	var questionNumber = key + 1;

	$(".panel").css(question.style);

	$("#questionDeck").text(question.text);

	$("#questionWrapper").text(question.holeNumber);

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


    
    