
describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // Кнопка "войти" задизеблена
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка "войти" активна
        cy.get('#loginButton').click(); // Клик на кнопку "войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видим крестик
        })


    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // Кнопка "войти" задизеблена
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1111'); // Ввели не верный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка "войти" активна
        cy.get('#loginButton').click(); // Клик на кнопку "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст совпадает
        })

    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // Кнопка "войти" задизеблена
        cy.get('#mail').type('german@dolnikojhjhv.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка "войти" активна
        cy.get('#loginButton').click(); // Клик на кнопку "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст совпадает
        })

it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // Кнопка "войти" задизеблена
        cy.get('#mail').type('germandolnikov.ru'); // Ввели  логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка "войти" активна
        cy.get('#loginButton').click(); // Клик на кнопку "войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст совпадает
        })

it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#forgotEmailButton').click(); // Нажимаем на забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видим крестик.
        })

it('На приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // Кнопка "войти" задизеблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка "войти" активна
        cy.get('#loginButton').click(); // Клик на кнопку "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').click();
        })

it('На приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // Кнопка "войти" задизеблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка "войти" активна
        cy.get('#loginButton').click(); // Клик на кнопку "войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видим крестик
        }) 
})

