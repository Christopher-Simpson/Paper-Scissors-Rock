

    let userChosen
    let computerChosen
    var result = results()
    const displayResult = document.getElementById('result')
    const computerChoice = document.getElementById('computer-choice')
    
    const userChoice = document.getElementById('your-choice')
    const possibleChoices = document.querySelectorAll('.choice')

    //get userChosen
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChosen = e.target.id
        generatedComputerChoice()
        results()
        userChoice.innerHTML = userChosen
        computerChoice.innerHTML = computerChosen
        displayResult.innerHTML = result
    }))

    //get a random computer choice
    function generatedComputerChoice() {
        const randomNumber = Math.round(Math.random() * (3))
        if (randomNumber === 1) {
            return computerChosen = 'rock'
        } else if (randomNumber === 2) {
            return computerChosen = 'paper'
        } else if (randomNumber === 2) {
            return computerChosen = 'scissors'
        }
    }

    //get results
    function results() {
        if (computerChosen === userChosen) {
            return result = 'It is a tie'
        } else if (computerChosen === 'rock' && userChosen === 'paper') {
            return result = 'You Win'
        } else if (computerChosen === 'rock' && userChosen === 'scissors') {
            return result = 'You Lose'
        } else if (computerChosen === 'paper' && userChosen === 'scissors') {
            return result = 'You Win'
        } else if (computerChosen === 'paper' && userChosen === 'rock') {
            return result = 'You Lose'
        } else if (computerChosen === 'scissors' && userChosen === 'rock') {
            return result = 'You Win'
        } else if (computerChosen === 'scissors' && userChosen === 'paper') {
            return result = 'You Lose'
        }
    }
