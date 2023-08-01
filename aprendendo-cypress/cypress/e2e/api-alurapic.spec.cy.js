describe("API AluraPic", () => {
  it("Dados da API", () => {
    cy.request({
      method: "POST",
      url: "https://alurapic-api.onrender.com/user/login",
      body: Cypress.env(),
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      expect(response.body).to.have.property("id");
      expect(response.body.id).to.be.equal(64);
    });
  });
});
