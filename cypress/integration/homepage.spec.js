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

  it("A user should see what they have typed into the form", () => {
    cy.get("input[name='name']")
    .type("Amber")
    .get("input[name='number']")
    .type("4")
  });

});
