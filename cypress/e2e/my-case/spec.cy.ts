// type UserReq = {};
// type UserRes = {};

describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Contains Layout Components', () => {
        cy.get('header.bg-zinc-200 > p')
            .should('be.visible')
            .should('contain.text', 'Header');

        cy.get('footer.bg-zinc-200 > p')
            .should('be.visible')
            .should('contain.text', 'Footer');

        cy.get('.flex.w-screen > :nth-child(1)').should('contain.text', 'Menu');
        cy.get('.flex.w-screen > :nth-child(2)').should('contain.html', 'li');
        cy.get('.flex.w-screen > :nth-child(3)').should(
            'contain.text',
            'Right'
        );

        cy.intercept('/api/product').as('getMockProducts');
    });

    it('Main Body is a grid', () => {
        cy.request('/api/product').then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response).property('body').to.have.property('length');
            expect(response).to.include.keys('headers', 'duration');
        });

        cy.get('li.bg-zinc-200')
            .find('li')
            // finds the div.test-title outside the #comparison
            // and the div.feature inside
            .should('have.class', 'test-title')
            .and('have.class', 'feature');

        const ll = cy.get('li.bg-zinc-200');

        console.log(ll);
    });
});
