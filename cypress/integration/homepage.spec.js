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
    cy.get("input[name='name']").type("Amber")
    .get("input[name='number']").type("4")
  });

  it("A user should fill out form, click the button, and see their reservation", () => {
    cy.get("input[name='name']").type("Amber")
    .get("input[name='date']").type("2022-07-23")
    .get("input[name='time']").type("5:45")
    .get("input[name='number']").type("4")
    .get("button").first().click()
    .get("h2").should("have.class", "name")
    .get("button").should("have.class", "cancel-button")
  });
});
