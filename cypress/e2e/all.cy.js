describe("test open home", () => {
  it("open page", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("test fetch products", () => {
  it("fetch products", () => {
    cy.request("https://fakestoreapi.com/products").then((response) => {
      expect(response.body).to.have.length(20);
      expect(response.status).to.have.eq(200);
    });
  });
});

describe("test form fields", () => {
  it("open form page", () => {
    cy.visit("http://localhost:5173/form");
  });

  it("have a value", () => {
    cy.visit("http://localhost:5173/form");
    cy.get('input[name="title"]').clear().type("test product");
    cy.get('input[name="price"]').clear().type(13.5);
    cy.get('input[name="description"]').clear().type("lorem");
    cy.get('input[name="image"]').clear().type("https://i.pravatar.cc");
    cy.get('input[name="category"]').clear().type("electronic");
  });
  it("add products", () => {
    cy.request("POST", "https://fakestoreapi.com/products", {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
