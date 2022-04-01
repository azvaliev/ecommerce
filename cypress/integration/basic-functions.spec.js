// basic-functions.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('home page functional', () => {
	it('renders page', () => {
		cy.visit('http://localhost:3000/');
		cy.contains('img');
		cy.contains('Home');
		cy.contains('Shop');
		cy.contains('About');
	});

});

describe('can navigate to shop', () => {
	it('can navigate to shop', () => {
		cy.visit('http://localhost:3000/');
		cy.get('button').click();
		cy.url().should('include', 'products');
	});
})