describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    
  }); 
    it('Verifica mensagem de campos obrigatórios do formulário', () => {
      cy.get('[data-test="register"]').click();
      cy.get('[data-test="btnRegister"]').click();
      cy.get('[data-test="btnRegister"]').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  });