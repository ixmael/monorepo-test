describe("Check if the fingerprint is loaded: ", () => {
  it("Augur service: ", () => {
    cy.visit("/");

    // cy.get("#response-status-value")
    //   .contains('success');
    
    cy.get("#response-token-value")
      .contains('fake_token_id');
  });
});
