class LandingPage {

  getLoginLink(fieldName) {
    return cy.get('.qa-user-login-button')
  }

}

export default LandingPage
