/* Program breakdown- Have computer generate a random number from 1-10000. Enter a while loop where the computer gesses the random number. If random number guessed matches the number generate, the loop ends.  If not matched, the loop continues until correct number is guessed. Finally, when loop exited, print to console the random number and number of guesses it took computer to guess it */


var upper = 10000;
var randomNumber = getRandomNumber (upper);
var guess;
var attempts = 0;

function getRandomNumber (upper); {
    return Math.floor(Math.random()* upper)+1;
}

while (guess !== randomNumber){
    guess= getRandomNumber(upper);
    attempts +=1;
}

document.write("<p>The random number was:" + randomNumber + "</p>");
document.write("<p>It took the computer" + attempts + "attempts to get it right.</p>");

/* I am really frustrated bc when I try to see if this runs the same way in a chrome or firefox console, as it does in workspaces, it does not.
I also am spending a lot of time learning things like chrome or brackets instead of on the classwork required, and I don't have time to waste.  I am such a noob */

