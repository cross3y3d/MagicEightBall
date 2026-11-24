//Magic Eight Ball - generates a random response when 'tilt' is activated, response scrolls across the screen indefinitely until 'tilt' is activated again

const possibleAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

const subscribe = E_TILT;

let tiltInterval = null;
let tiltCounter = 0;

function enter() {
  Ollee.clear();
  Ollee.drawMain('Shake ');
}

const tilt = () => {
  tiltCounter++;
  if (tiltCounter >= 5) {
    Ollee.clearInterval(tiltInterval);
    Ollee.clear();
    let answer = "      " + possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)] + "      ";
    tiltInterval = Ollee.setInterval(() => {
      Ollee.drawMain(answer.slice(0, 6));
      answer = answer.slice(1) + answer.charAt(0);
    }, 250);
    tiltCounter = 0;
  }
}
