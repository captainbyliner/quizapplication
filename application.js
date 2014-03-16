
var questions = [{
	text: 'How many majors did Jack Nicklaus win?',
	answers: ['18 Majors', '14 Majors', '19 Majors', '17 Majors'],
	style: {backgroundColor:"green"},
	holeNumber: 'Hole #1: A short dog leg to the right, Par 4',
	right:'Correct! The Golden Bear won his 6th Masters and his 18th Major aged 46 in 1986',
	wrong:'Wrong! The correct answer was Jack Nicklaus. The Golden Bear won his 6th Masters and his 18th Major aged 46 in 1986',
	correctAnswer: 0
},{
	text: 'What was the highest Par 4 score in a PGA Tour event?',
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
	style: {backgroundColor:"plum"},
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
},{
	text:'The first Green Jacket was awarded in 1949. Who won it?',
	answers:['Sam Snead', 'Ben Hogan' , 'Charles Coody' , 'Byron Nelson'],
	style:{backgroundColor:"DarkGreen"},
	holeNumber:'Hole #6: A 157-yard Par 3 surrounded by water',
	right:'Correct: Sam Snead was awarded the first Green Jacket. The historic blazer had been the Augusta uniform for more than 70 years',
	wrong:'Wrong: Sam Snead was awarded the first Green Jacket. The historic blazer had been the Augusta uniform for more than 70 years',
	correctAnswer:0
},{
	text:'Name the only player to lost The Masters twice in a playoff?',
	answers:['Johnny Miller' , 'Seve Ballesteros' , 'Greg Norman' ,'Ben Hogan'],
	style:{backgroundColor:"Peru"},
	holeNumber:'Hole #7: A 444-Yard Par 4, with OB down the right hand-side and bunkers on the left',
	right:'Correct: In 1942, Byron Nelson defeated Hogan in a playoff. In 1954, Hogan fell to Sam Snead in a playoff.',
	wrong:'Wrong: In 1942, Byron Nelson defeated Hogan in a playoff. In 1954, Hogan fell to Sam Snead in a playoff.',
	correctAnswer:3

},{
	text:'This player had 11 successive tournament wins in 1945:',
	answers:['Sam Snead', 'Byron Nelson' , 'Walter Hagen' , 'Gene Sarazen'],
	style:{backgroundColor:"RosyBrown"},
	holeNumber:'Hole #8: You can drive the green on the Par 4 or play it safe for an easy par',
	right:'Correct: Byron Nelson won 18 out of 35 PGA tournaments, including 11 in a row. Arnold Palmer said the streak would never be equalled.',
	wrong:'Correct: Byron Nelson won 18 out of 35 PGA tournaments, including 11 in a row. Arnold Palmer said the streak would never be equalled.',
	correctAnswer:1

},{
	
	text:'Who is the oldest winner of the U.S. Open?',
	answers:['Ted Ray' , 'Jack Nicklaus' , 'Bobby Jones' , 'Hale Irwin'],
	style:{backgroundColor:"DodgerBlue"},
	holeNumber:'Hole #9: A long Par 4 to a sloping green fronted by water.',
	right:'Correct: Hale Irwin was 45 when he won his 3rd U.S. Open title in 1990. He drained a 45-foot birdie putt on the 72nd hole to force a playoff with Mike Donald.',
	wrong: 'Correct: Hale Irwin was 45 when he won his 3rd U.S. Open title in 1990. He drained a 45-foot birdie putt on the 72nd hole to force a playoff with Mike Donald.',
	correctAnswer:3

}];


var questionKey = 0;

var correctAnswers = 0;

function displayQuestion(key) {

	var question = questions[key];

	var questionNumber = key + 1;

	$(".panel").css(question.style);

	$("#questionDeck").text(question.text);

	$("#questionWrapper").text(question.holeNumber);

	$("#addAnswer").show();

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

	$("#initGame").on('click', function () {
		$(".introPanel").hide();
		displayQuestion(questionKey);
		$(".panel").show();
	});

   $("#addAnswer").on('click', function() {

      	var selectedAnswer = $("#answers input[type='radio']:checked").val()

   		var question = questions[questionKey];

   		question.userAnswer = selectedAnswer;

   		if(selectedAnswer == undefined) {
   			$("#warning").show().delay(1000).fadeOut();
   			return false;
   		}

   		

 		if (selectedAnswer == question.correctAnswer) {
 			$("#rightWrong").show().delay(7000).fadeOut();
 			$("#rightWrong").text(question.right);
 			$("#rightWrong").css("backgroundColor", "green");
 			correctAnswers++
 		} else {
 			$("#rightWrong").show().delay(7000).fadeOut();
 			$("#rightWrong").text(question.wrong);
 			$("#rightWrong").css("backgroundColor", "red");
 		}

 		console.log(correctAnswers);


 		questionKey++;
 		if (questionKey >(questions.length -1)) {
 				questionKey = (questions.length -1);
 				$(".panel").hide();
 				$(".conclusionPanel").show();
 				$("#conclusionText").text('Nice round shooter. You scored' + ' ' + correctAnswers + ' ' + 'out of 9!');
 				
 		} else {
 			displayQuestion(questionKey)
 		}

 	});
 		
	$("#answers").on('click', 'li', function() {
		$(this).find("input").prop('checked', true);
		
    });    

$('.ball').addClass('rotate');




 });






    
    