class MyInfoPage {

    selectorsList () {
        
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
        return myInfoPageSelectors
    }
        
   
    fillPersonalDetails (firstname, lastname){
        
        cy.get(this.selectorsList().firstNameField).clear().type(firstname)
        cy.get(this.selectorsList().lastNameField).clear().type(lastname)       
    }

    fillEmpoyeeDetails(employeerId,otherId,idTest,dateYYYYDDMM){

        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeerId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(idTest)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(dateYYYYDDMM)
        cy.get(this.selectorsList().dateCloseButtom).click()
        
    }

    saveForm(){

        cy.get(this.selectorsList().submitButton).eq(0).click()
        // cy.get('body').should('contain', 'Successfully Updated')
        // cy.get(".oxd-toast-close")
    }

    fillStatus(){
        cy.get(this.selectorsList().genericSelectDropbox).eq(0).click()
        cy.get(this.selectorsList().selectFirstContent).click()
        cy.get(this.selectorsList().genericSelectDropbox).eq(1).click()
        cy.get(this.selectorsList().selectSecondContent).click()
    }
}

export default MyInfoPage