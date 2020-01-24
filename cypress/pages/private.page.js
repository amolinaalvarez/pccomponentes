class LandingPage {

  getMyAccountLink(fieldName) {
    return cy.get('.qa-user-login-button')
  }

  getMyAccountMenuLink(fieldName) {
    return cy.get('.qa-user-login-sub-1')
  }

}

export default LandingPage
