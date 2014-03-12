

var questions = [{
	text: 'How many majors did Jack Nicklaus win?',
	answers: ['18 Majors', '14 Majors', '19 Majors', '17 Majors'],
	style: {backgroundColor:"green"},
	holeNumber: 'Hole #1: A short dog leg to the right, Par 4',
	right:'Correct! The Golden Bear won his 6th Masters and his 18th Major aged 46 in 1986',
	wrong:'Wrong! The correct answer was Jack Nicklaus. The Golden Bear won his 6th Masters and his 18th Major aged 46 in 1986',
	correctAnswer: 0
},{
	text: 'The highest Par 4 score in a PGA Tour event?',
	answers: ['12', '16', '15', '18'],
	style: {backgroundColor:"magenta"},
	holeNumber: 'Hole #2: A short, well-bunkered Par 3',
	right:'Correct: Kevin Na carded a 16 on the Par 4 9th at the 2011 Valero Texas Open en route to an 80.',
	wrong:'Wrong: Kevin Na carded a 16 on the Par 4 9th at the 2011 Valero Texas Open en route to an 80.',
	correctAnswer:1
},{
	text: 'Who has won the most British Open titles?',
	answers: ['Tiger Woods', 'Harry Vardon', 'Tom Watson', 'Old Tom Morris'],
	style: {backgroundColor:"orange"},
	holeNumber: 'Hole #3: A Par 4, reminiscent of the Road Hole',
	right:'Correct: Harry Vardon is alone with 6 Open titles. Five golfers have five: James Braid, J.H. Taylor, Peter Thomson and Tom Watson',
	wrong:'Wrong: Harry Vardon is alone with 6 Open titles. Five golfers have five: James Braid, J.H. Taylor, Peter Thomson and Tom Watson',
	correctAnswer:1
},{
	text: 'Who said "The only thing a golfer needs is more sunlight?"',
	answers: ['Raymond Floyd', 'Tom Watson', 'Bagger Vance', 'Ben Hogan'],
	style: {backgroundColor:"purple"},
	holeNumber: 'Hole #4: A straightaway Par 5 flanked by fescue',
	right:'Correct: Hogan was relentless in his quest to own his swing and hit the range when his fellow pros hit the bottle. He carded 9 majors, tying him for fourth all-time with Gary Player.',
	wrong:'Wrong: Hogan was relentless in his quest to own his swing and hit the range when his fellow pros hit the bottle. He carded 9 majors, tying him for fourth all-time with Gary Player.',
	correctAnswer:3
},{
	text: 'What is the maximum number of clubs a golfer can carry?',
	answers:['12', '15', '14', '16'],
	style:{backgroundColor:"bisque"},
	holeNumber: 'Hole #5: A reachable Par 5 if you have no fear',
	right:'Correct: The maximum number of clubs is 14. The penalty is a costly one. A players incurs a two-stroke penalty for every hole played with the extra club up to a maximum of four strokes.',
	wrong:'Wrong: The maximum number of clubs is 14. The penalty is a costly one. A players incurs a two-stroke penalty for every hole played with the extra club up to a maximum of four strokes.',
	correctAnswer:2
}];


var questionKey = 0;

var correctAnswers = 0;

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

   		question.userAnswer = selectedAnswer;

   		if(selectedAnswer == undefined) {
   			alert("Please answer the question!");
   			return false;

   		}

 		if (selectedAnswer == question.correctAnswer) {
 			console.log("You are correct");
 			$("#rightWrong").show();
 			$("#rightWrong").text(question.right);
 			$("#rightWrong").css("backgroundColor", "green");
 			correctAnswers++
 		} else {
 			$("#rightWrong").show();
 			$("#rightWrong").text(question.wrong);
 			$("#rightWrong").css("backgroundColor", "red");

 		}

 		console.log(correctAnswers);


 		questionKey++;
 		if (questionKey >(questions.length -1)) {
 				questionKey = (questions.length -1);
 				alert("You've finished the quiz");
 		} else {
 			displayQuestion(questionKey)
 		}

 	});
 		
	$("#answers").on('click', 'li', function() {
		$(this).find("input").prop('checked', true);
		console.log("Hello");
 	
    });    

 });






    
    