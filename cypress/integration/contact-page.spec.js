describe("Contact page works", () => {
	it("can access contact page", () => {
		cy.visit("http://localhost:3000/");
		cy.get("#contact").click();
		cy.url().should("include", "contact");
	});
	it("can fill and submit form", () => {
		cy.get('input[name="email"]').type("test@mail.com");
		cy.get("textarea").type("Test Message");
		cy.get('input[type="submit"]').click();
		cy.contains("delivered");
		cy.wait(5500);
		cy.url().should("not.contain", "contact");
	});
	it("form will not accept invalid input", () => {
		cy.visit("http://localhost:3000/contact");
		cy.get("textarea").type("Test Message");
		cy.get('input[type="submit"]').click();
		cy.contains("fail");
		cy.visit("http://localhost:3000/contact");
		cy.get('input[name="email"]').type("test@mail.com");
		cy.get('input[type="submit"]').click();
		cy.contains("fail");
		cy.wait(5500);
		cy.url().should("contain", "contact");
	});
});
