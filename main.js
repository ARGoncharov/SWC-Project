const askButton = document.querySelector('.menu-button');

askButton.addEventListener('click', function () {
    const userQuestion = prompt("Задайте ваш вопрос?", "");

    if (userQuestion) {
        let userEmailInput = prompt("Пожалуйста, введите ваш адрес электронной почты:");
        if (userEmailInput == null || userEmailInput === "") {
            alert("Вы не ввели адрес электронной почты. Попробуйте еще раз!");
        } else {
            alert(`Спасибо за ваш вопрос! Мы отправим ответ на ${userEmailInput}!` )
        }
    }
})

