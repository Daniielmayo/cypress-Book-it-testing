describe("Pruebas de renderización de hoteles ", () => {
    it("Verifica que la cantidad de hoteles coincida con la API y los precios sean correctos", () => {
        // Obtén la lista de hoteles desde la API
        cy.request("https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels")
            .its("body")
            .should("have.length.gt", 0)
            .then((apiHotels) => {
                // Visita la página de reserva de hoteles
                cy.visit("http://127.0.0.1:5500/index.html");


                // Verifica la cantidad de tarjetas de hotel renderizadas
                cy.get(".hotelsSection .card").should("have.length", apiHotels.length);
                // Selecciona la opción "$$$" en el input de precios
                cy.get("#pricesInpunt").select("$$$");

                // Obtén el valor seleccionado en el input de precios
                cy.get(".hotelsSection .card").each(($card, index) => {
                    // Encuentra el elemento <span> dentro de la card
                    cy.wrap($card).find(".card__roomsandprice .priceHotels").should("contain", "$$$");
                });
            });
    });
});