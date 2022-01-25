const chrystallBallImg = document.getElementById('chrystal-ball');
const userNameSubmitBtn = document.querySelector('.user-name__submit');
const fortuneCardContainer = document.querySelector('.card__container');
const userFortune = document.querySelector('.card__paragraph');
const userName = document.querySelector('.user-name__input').textContent;

const userNameContainer = document.querySelector(
    '.user-name__container--hidden'
);

const fortuneOne = `blir rik`;
const fortuneTwo = `skal ut på en reise`;
const fortuneThree = `får et kjeledyr`;
const fortuneFour = `vinner lotto`;
const fortuneFive = `blir lykkelig`;

let randomNumber = Math.floor((Math.random() * 5) + 1);

/* const showUserNameInput = () => {
    userNameContainer.classList.remove('user-name__container--hidden');
}; */

const showFortune = () => {
    fortuneCardContainer.classList.remove('card__container--didplay-none');
    if (randomNumber === 1) {
        userFortune.innerHTML = `${userName} ${fortuneOne}`;
    }
    if (randomNumber === 2) {
        userFortune.innerHTML = `${userName} ${fortuneTwo}`;
    }
    if (randomNumber === 3) {
        userFortune.innerHTML = `${userName} ${fortuneThree}`;
    }
    if (randomNumber === 4) {
        userFortune.innerHTML = `${userName} ${fortuneFour}`;
    }
    if (randomNumber === 5) {
        userFortune.innerHTML = `${userName} ${fortuneFive}`;
    }
};

// chrystallBallImg.addEventListener('click', showUserNameInput);

userNameSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showFortune();
    randomNumber = Math.floor((Math.random() * 5) + 1);
    console.log(userName);
});