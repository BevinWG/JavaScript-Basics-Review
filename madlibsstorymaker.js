//"<h2> Once upon a time, there was a [adjective] girl who wanted to make iOS apps to [verb] the [noun].</h2>"//

var questions = 3;
var questionsLeft = '[ + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions + 'questions left]';
var sentence = "<h2>There once was a " + adjective;
var verb = prompt('Please type a verb.');
questions -= 1;
questionsLeft = ' [' + questions + 'questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
alert('All Done! Ready for the message?!');
sentence += 'girl who wanted to make iOS apps to' + verb;
sentence += 'the' + noun + '.</h2>';
document.write(sentence);

