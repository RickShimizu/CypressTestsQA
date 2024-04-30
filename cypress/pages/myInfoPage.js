
const myInfoPageSelectors = {
    firstNameField:"[name='firstName']" ,
    lastNameField: "[name='lastName']",    
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButtom: ".--close",
    submitButton: "[type='submit']",
    genericSelectDropbox:".oxd-select-text--active",
    selectFirstContent: ':nth-child(92)',
    selectSecondContent: ".oxd-select-dropdown > :nth-child(3)"
}

class MyInfoPage {

   
    fillUpForms (firstname, lastname, employeer,other,idTest,dateYYYYDDMM){
        
        cy.get(myInfoPageSelectors.firstNameField).clear().type(firstname)
        cy.get(myInfoPageSelectors.lastNameField).clear().type(lastname)
        cy.get(myInfoPageSelectors.genericField).eq(3).clear().type(employeer)
        cy.get(myInfoPageSelectors.genericField).eq(4).clear().type(other)
        cy.get(myInfoPageSelectors.genericField).eq(5).clear().type(idTest)
        cy.get(myInfoPageSelectors.genericField).eq(6).clear().type(dateYYYYDDMM)
        cy.get(myInfoPageSelectors.dateCloseButtom).click()
        cy.get(myInfoPageSelectors.genericSelectDropbox).eq(0).click()
        cy.get(myInfoPageSelectors.selectFirstContent).click()
        cy.get(myInfoPageSelectors.genericSelectDropbox).eq(1).click()
        cy.get(myInfoPageSelectors.selectSecondContent).click()
        
        // cy.get(selectorList.submitButton).eq(0).click()
        // cy.get('body').should('contain', 'Successfully Updated')
        // cy.get(".oxd-toast-close")
    }
}

export default MyInfoPage