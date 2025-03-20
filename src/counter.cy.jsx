import React from "react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("test intial value", () => {
    
    cy.mount(<Counter />);
    cy.get(".value").should("have.text", 0);
  });

  it("test increment value", () => {
 
    cy.mount(<Counter />);
    cy.get(".inc__button").click();
    cy.get(".value").should("have.text", 1);
  });

  it("test decrement value", () => {

    cy.mount(<Counter />);
    cy.get(".dec__button").click();
    cy.get(".value").should("have.text", -1);
  });
});
