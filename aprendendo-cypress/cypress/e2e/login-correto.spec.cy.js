describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
  });

  it("Deve preencher os campos do formulário corretamente e realizar login", () => {
    cy.login("gabrielirt", "12345678");
    cy.contains("a", "(Logout)").should("be.visible");
  });
});
