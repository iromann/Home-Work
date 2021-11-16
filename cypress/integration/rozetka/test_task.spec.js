/// <reference types="cypress" />


describe('Test task in AB Soft', () => {
  beforeEach(() => {
    cy.navigateWithLang('RU')
  })

  it('Search the RTX 3080 graphics card', () => {
    cy.type
    cy.get('[class*="search-form__input"] input').type('RTX 3080{enter}')
    cy.get('button[class*="catalog-settings__filter"]').click()
    cy.contains('.side-filter [class*="categories-filter__link-title"]', 'Видеокарты').click()
    cy.get('.side-filter [class*="side-filter__footer"] button').click()
    cy.get('select').select('1: cheap')

  })
})
