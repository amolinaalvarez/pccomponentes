
class LoginPage {

  getEmailInput() {
    return cy.get('#userLogin_email')
  }

  getPasswordInput() {
    return cy.get('#userLogin_password')
  }

  getLoginButton() {
    return cy.get('#userLogin_login')
  }

  getInvalidEmailMessage() {
    return cy.get('#userLogin_email-error')
  }

  getInvalidPasswordMessage() {
    return cy.get('#userLogin_password-error')
  }

  // TODO: improve how to identify this DOM element in the HTML
  getIncorrectEmailOrPasswordMessage() {
    return cy.get('.caja-login *> div.alert')
  }

}

export default LoginPage
