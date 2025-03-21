import React from "react";
import Nav from "./Nav";

describe("<Nav />", () => {
  it("test basket count", () => {
    cy.mount(<Nav count={20} />);
    cy.get(".basket").should("have.text", 20);
  });
});
