import faker from 'faker'

import LoginPage from '../pages/login.page'
import PrivatePage from '../pages/private.page'

describe('Login tests', () => {

  const loginPage = new LoginPage()
  const privatePage = new PrivatePage()

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
    cy.visit('/login')
  })

  xit('should validate the email as an invalid email address', () => {
    cy.login(faker.name.findName(), faker.internet.password())
    loginPage.getInvalidEmailMessage()
      .should('be.visible')
      .and('have.class', 'aviso-de-error')
  });

  xit('should validate the password field as a mandatory one', () => {
    cy.login(faker.internet.email())
    loginPage.getInvalidPasswordMessage()
      .should('be.visible')
      .and('have.class', 'aviso-de-error')
  });

  xit('should validate the credentials provided as incorrect', () => {
    cy.login(faker.internet.email(), faker.internet.password())
    loginPage.getIncorrectEmailOrPasswordMessage()
      .should('be.visible')
  });

  it('should log in a valid user', () => {
    cy.login(Cypress.env('credentials')['email'], Cypress.env('credentials')['password'])
    privatePage.getMyAccountLink().should('be.visible').trigger('mouseover')
    privatePage.getMyAccountLink().should('be.visible')
  });

});

