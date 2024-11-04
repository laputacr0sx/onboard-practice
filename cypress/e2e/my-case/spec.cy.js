describe('My First Test', () => {
    it('Visit the App', () => {
        cy.intercept('GET', '/api/product', { fixture: 'products.json' }).as(
            'fetchProducts'
        );

        cy.visit('http://localhost:3000');

        // cy.get('li.bg-zinc-200')
        //     .eq(0)
        //     .should('contain.text', 'Xperia 1 6/64GB 平行進口 日本版 [3色]');
        //
        // cy.get('li.bg-zinc-200')
        //     .eq(1)
        //     .should('contain.text', 'Xperia 1 6GB+128GB 夜黑色 香港行貨');
        //
        //
    });
});
