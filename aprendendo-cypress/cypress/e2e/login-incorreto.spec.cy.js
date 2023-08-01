describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

        cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })
    it('Verificar mensagem de campos obrigatórios', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
    });

    it('Deve falhar mesmo que os campos digitados estejam corretos', () => {
        cy.login('gabrielirt', '12345678');
        cy.wait('@stubPost');
    });
});
