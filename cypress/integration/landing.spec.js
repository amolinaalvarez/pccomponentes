import LandingPage from '../pages/landing.page'

describe('Landing page tests', () => {

  const landingPage = new LandingPage()

  /*
    This call trying to get an image 'https://www.pccomponentes.com/%7B%7Bimageurl%7D%7D' returns a 301 code
    so it is necessary to manage 'uncaught:exception' in order to ignore errors from the site itself.
    Once this problem is fixed, this code could be removed
  */
  Cypress.on('uncaught:exception', () => {
    return false
  })

  before(function () {
    cy.clearCookies()
  })

  beforeEach(function () {
    cy.visit('/')
  })

  xit('Should go to the login page', () => {
    landingPage.getLoginLink().should('be.visible').click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/login`)
  });

});
