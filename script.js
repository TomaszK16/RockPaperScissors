const buttons = document.querySelectorAll("button");
const resultHeader = document.querySelector("#result");
const resultDescription = document.querySelector("#resultDescription");
const scoreHeader = document.querySelector("#score");

let selected = {user: null, computer: null};
let score = {user: 0, computer: 0}

const aiChoice = () => buttons[Math.floor(Math.random() * buttons.length)].id;
const determineResult = () => selected.user === selected.computer ? null : doesUserWin(); 

const doesUserWin = () => (
    (selected.user === 'scissors' && selected.computer === 'paper')    ||
    (selected.user === 'rock'     && selected.computer === 'scissors') ||
    (selected.user === 'paper'    && selected.computer === 'rock')
);

const modifyScore = (latestResult) => latestResult !== null ? latestResult ? score.user++ : score.computer++ : null;

buttons.forEach(btn =>
    btn.addEventListener('click', (e) => {
        selected.user = e.currentTarget.id;
        selected.computer = aiChoice();

        const result = determineResult();
        modifyScore(result);

        resultHeader.innerText = result === null ? 'Draw!' : result ? 'Victory!' : 'You lose!';
        resultDescription.innerText = `AI chose ${selected.computer}!`;
        scoreHeader.innerText = `👤 ${score.user} - ${score.computer} 💻`;
    })
);




