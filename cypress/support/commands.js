

Cypress.Commands.add('navigateWithLang', (lang) => {
    switch (lang) {
        case 'RU': cy.visit("/");
        case 'UA': cy.visit("/ua/");
    }
})
