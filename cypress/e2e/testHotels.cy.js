// describe("Pruebas de renderización de hoteles ", () => {
//     it("Verifica que la cantidad de hoteles coincida con la API y los precios sean correctos", () => {
//         // Obtén la lista de hoteles desde la API
//         cy.request("https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels")
//             .its("body")
//             .should("have.length.gt", 0)
//             .then((apiHotels) => {

//                 cy.visit("https://book-it-phi.vercel.app/");


//                 cy.get(".hotelsSection .card").should("have.length", apiHotels.length);

//                 cy.get("#pricesInpunt").select("$$$");


//                 cy.get(".hotelsSection .card").each(($card) => {

//                     cy.wrap($card).find(".card__roomsandprice #priceHotels").should("contain", "$$$");
//                 });
//             });
//     });
// });
describe("Pruebas de renderización de hoteles", () => {
    it("Verifica que la cantidad de hoteles coincida con la API y los precios sean correctos", () => {
        // Obtén la lista de hoteles desde la API
        cy.request("https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels")
            .its("body")
            .should("have.length.gt", 0)
            .then((apiHotels) => {

                cy.visit("http://127.0.0.1:5500/index.html");

                cy.get(".hotelsSection .card").should("have.length", apiHotels.length);

                cy.get("#pricesInpunt").select("$$$");

                cy.get(".hotelsSection .card").each(($card) => {
                    cy.wrap($card).find(".card__roomsandprice #priceHotels").should("contain", "$$$");
                });
            });
    });
});
