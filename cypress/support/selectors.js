/// <reference types="Cypress"/>

export default {
    botaoSignUp: 'a[class="nav-link"][data-target="#signInModal',
    campoUserNameCadastro: 'input[type="text"]#sign-username',
    campoPasswordCadastro: 'input[type="password"]#sign-password',
    botaoSignUpCadastro: 'button[type="button"][onclick="register()"]',
    botaoLogin: 'a[class="nav-link"]#login2',
    campoUserNameLogin: '#loginusername',
    campoPasswordLogin: '#loginpassword',
    botaoLogInLogin: 'button[type="button"][onclick="logIn()"]',
    botaoLogout: 'a[class="nav-link"][onclick="logOut()"]#logout2',
    primeiroItemLista: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
    botaoAddToCart: 'a[onclick="addToCart(1)"]',
    botaoCart: '#cartur',
    botaoPlaceOrder: 'button[type="button"][class="btn btn-success"]',
    campoNamePlaceOrder: 'input[type="text"][class="form-control"]#name',
    campoCountryPlaceOrder: 'input[type="text"][class="form-control"]#country',
    campoCityPlaceOrder: 'input[type="text"][class="form-control"]#city',
    campoCardPlaceOrder: 'input[type="text"][class="form-control"]#card',
    campoMonthPlaceOrder: 'input[type="text"][class="form-control"]#month',
    campoYearPlaceOrder: 'input[type="text"][class="form-control"]#year',
    botaoPurchasePlaceOrder: 'button[type="button"][onclick="purchaseOrder()"]',
    listaCarrinho: '.success'
}