const chrystallBallImg = document.getElementById('chrystal-ball');
const userNameSubmitBtn = document.querySelector('.user-name__submit');
const fortuneCardContainer = document.querySelector('.card__container');
const userFortune = document.querySelector('.card__paragraph');
const userName = document.querySelector('.user-name__input');
const card = document.querySelector('.card');

const userNameContainer = document.querySelector(
    '.user-name__container--hidden'
);

const fortuneOne = `blir rik`;
const fortuneTwo = `skal ut på en reise`;
const fortuneThree = `får et kjeledyr`;
const fortuneFour = `vinner lotto`;
const fortuneFive = `blir lykkelig`;

let randomNumber = Math.floor((Math.random() * 5) + 1);

const showUserNameInput = () => {
    userNameContainer.classList.remove('user-name__container--hidden');
};

const showFortune = () => {
    fortuneCardContainer.classList.remove('card__container--didplay-none');

    if (randomNumber === 1) {
        userFortune.innerHTML = `${userName.value} ${fortuneOne}`;
        card.style.backgroundColor = 'rgb(247, 225, 225)';
    }
    else if (randomNumber === 2) {
        userFortune.innerHTML = `${userName.value} ${fortuneTwo}`;
        card.style.backgroundColor = 'rgb(193, 250, 198)';
    }
    else if (randomNumber === 3) {
        userFortune.innerHTML = `${userName.value} ${fortuneThree}`;
        card.style.backgroundColor = 'rgb(182, 183, 196)';
    }
    else if (randomNumber === 4) {
        userFortune.innerHTML = `${userName.value} ${fortuneFour}`;
        card.style.backgroundColor = 'gb(145, 163, 221)';
    }
    else if (randomNumber === 5) {
        userFortune.innerHTML = `${userName.value} ${fortuneFive}`;
        card.style.backgroundColor = 'rgb(206, 145, 221)';
    }
};

chrystallBallImg.addEventListener('click', showUserNameInput);

userNameSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showFortune();
    randomNumber = Math.floor((Math.random() * 5) + 1);
});