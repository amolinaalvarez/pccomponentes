import LoginPage from '../pages/login.page'

const loginPage = new LoginPage()

Cypress.Commands.add('login', (email, password) => {
  loginPage.getEmailInput().type(email)
  if (password) {
    loginPage.getPasswordInput().type(password)
  }
  loginPage.getLoginButton().click()
})
