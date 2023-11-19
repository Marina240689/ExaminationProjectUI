

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
    cy.get('[class="item-name"]').then(element => {
        if(element.find(`.item-name:contains("${productName}")`).length > 0) {
            cy.get('.item-name:contains("${productName}")').click();
        } else {
            cy.get('[aria-label="Next page"]').should('be.enabled').click({force:true});
            findProduct(productName);
        }
    })
}





