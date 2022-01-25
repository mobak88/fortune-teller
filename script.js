const chrystallBallImg = document.getElementById('chrystal-ball');
const userNameSubmitBtn = document.querySelector('.user-name__submit');
const fortuneCardContainer = document.querySelector('.card__container');
const userFortune = document.querySelector('.card__paragraph');

const userNameContainer = document.querySelector(
    '.user-name__container--hidden'
);

const fortuneOne = `Fortune 1`;
const fortuneTwo = `Fortune 2`;
const fortuneThree = `Fortune 3`;
const fortuneFour = `Fortune 4`;
const fortuneFive = `Fortune 5`;

let randomNumber = Math.floor((Math.random() * 5) + 1);

const showUserNameInput = () => {
    userNameContainer.classList.remove('user-name__container--hidden');
};

const showFortune = () => {
    fortuneCardContainer.classList.remove('card__container--didplay-none');
    if (randomNumber = 1) {
        userFortune.innerHTML = fortuneOne;
    }
    if (randomNumber = 2) {
        userFortune.innerHTML = fortuneTwo;
    }
    if (randomNumber = 3) {
        userFortune.innerHTML = fortuneThree;
    }
    if (randomNumber = 4) {
        userFortune.innerHTML = fortuneFour;
    }
    if (randomNumber = 5) {
        userFortune.innerHTML = fortuneFive;
    }
    console.log(randomNumber);
};

chrystallBallImg.addEventListener('click', showUserNameInput);

userNameSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showFortune();
});