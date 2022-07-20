describe("Homepage flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("A user can visit the app", () => {
    cy.contains("Turing Cafe Reservations")
    .get("form").contains("Make Reservation")
  });

  it("A user should see all existing reservations", () => {
    cy.get("div").should("have.class", "resy-container")
    .get("div").should("have.class", "card-wrapper")
    .get("h2").should("have.class", "name")
  });

});
