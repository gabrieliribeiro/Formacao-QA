const el = require('./element').ELEMENTS;

class Cadastro{
    acessarPaginaDeCadastro(){
        cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
        cy.get(el.registerNow).click();
    }

    preecherFormulario(){
        cy.get(el.email).type('bonnie@gmail.com');
        cy.get(el.fullName).type('Bonnie Benet');
        cy.get(el.userName).type('bonnieclete');
        cy.get(el.password).type('bonnie123');
    }

    submeterCadastro(){
        cy.get(el.btnRegister).click();
    }
}

export default new Cadastro();