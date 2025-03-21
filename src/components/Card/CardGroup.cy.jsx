import React from "react";
import CardGroup from "./CardGroup";
const data = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};
describe("<CardGroup />", () => {
  it("test card content", () => {
    cy.mount(
      <CardGroup
        title={data.title}
        image={data.image}
        price={data.price}
        rating={data.rating}
      />
    );

    cy.get("img")
      .invoke("attr", "src")
      .should("eq", "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");

    cy.get("h5").should(
      "have.text",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".rating").should("have.text", 3.9);
    cy.get(".price").should("have.text", 109.95);
  });
});

