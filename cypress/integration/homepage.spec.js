describe("Homepage flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("A user can visit the app", () => {
    cy.contains("Turing Cafe Reservations")
    .get("form")
    .contains("Make Reservation")
  });


});
