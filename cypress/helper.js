

export function checkErrorTooltipColor(page, element) {
    page.getAllErrorTooltips().each((tooltip) => {
        cy.wrap(tooltip)
        .should('be.visible')
        .and('have.css', 'color', element.errorColor)
    })
}

    export function checkValidatedFieldsColor(page, element) {
        page.getAllValidatedFields().each((field) => {
            cy.wrap(field)
            .should('have.css', 'color', element.errorColor)
        })
    }

    // export function findProduct(productName) { /* не працює */
    //     cy.get('[class="item-name"]').filter(`:contains("${productName}")`).then(element => {
    //         if(element.length > 0) {
    //             cy.wrap(element).click();
    //         } else {
    //             cy.get('[aria-label="Next page"]').click();
    //             findProduct(productName)
    //         }
    //     })
    // }


    // export function findProduct(productName) {
    //     cy.get('mat-sidenav-content').find('[class="item-name"]').and(productName).then(element => {
    //         if(element.length > 0) {
    //             cy.wrap(element).click();
    //         } else {
    //             cy.get('[aria-label="Next page"]').click();
    //             findProduct(productName)
    //         }
    //     })
    // }

    export function findProduct(productName) { /* не працює */
    cy.get('div.table-container').then(list => {
        if(list.find(`[alt="${productName}"]`).length > 0 ) {
            cy.get(`[alt="${productName}"]`)
            .closest('.ribbon-card')
            .find('[aria-label="Add to Basket"]')
            .click()
        } else {
            cy.get('[aria-label="Next page"]').should('be.enabled').click({force:true});
            findProduct(productName);
        }
    })
}





