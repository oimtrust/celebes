/********  Field Filling ********/
export function fillField(selector, value) {
  return cy.get(selector).type("x").clear().type(value).should("have.value", value);
}


/******** Element Selection ********/
export function get(selector) {
  return cy.get(selector);
}

/******** Element Clicking ********/
export function click(selector, ...args) {
  return cy.get(selector).click(...args);
}

export function clickIfContain(selector, value) {
  return cy.get(selector).contains(value).click();
}