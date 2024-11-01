describe('My First Test', () => {
    it('Visit the Demo App', () => {
        cy.visit('http://localhost:3000');

        cy.contains('Preview').click();

        cy.contains(
            'p.text-sm:nth-child(1)',
            'H6588002_S_ST_Sony_Xperia1_64_JP_Black'
        );
    });
});
