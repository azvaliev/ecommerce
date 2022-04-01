describe('filters work', () => {
	it('contains filters', () => {
		cy.visit('http://localhost:3000/');
		cy.get('button').click();
		cy.url().should('include', 'products');
	});
	it('can use all filters', () => {
		cy.document().then((doc) => {
			const defaultProductLen = doc.querySelectorAll('.product').length;
			const filterLen = doc.querySelectorAll('.filter').length;

			for (let i = 0; i < filterLen; i++) {
				// Properly filters and reduces # of items
				cy.get(`#filter${i}`).select(1);
				cy.get('#allProductsWrapper').find('.product').its('length').should('lt', defaultProductLen)
				
				// Properly resets filter
				cy.get(`#filter${i}`).select(0);
				cy.get('#allProductsWrapper').find('.product').its('length').should('eq', defaultProductLen)	
			};

		});
	});
	it('can use filters in combination', () => {
		cy.document().then((doc) => {
			const defaultProductLen = doc.querySelectorAll('.product').length;
			const filterLen = doc.querySelectorAll('.filter').length;

			for (let i = 0; i < filterLen - 1; i++) {
				// Properly filters and reduces # of items
				cy.get(`#filter${i}`).select(1);
				cy.get('#allProductsWrapper').find('.product').its('length').should('lt', defaultProductLen);

				const currentProductLen = doc.querySelectorAll('.product').length;
				// Check if length is reduce with doubling up of filters
				cy.get(`#filter${i + 1}`).select(1);
				cy.get('#allProductsWrapper').find('.product').its('length').should('lt', currentProductLen);
				
				cy.get(`#filter${i}`).select(0);
				cy.get(`#filter${i + 1}`).select(0);
			};

		});	
	})
})