class DashboardPage {

    selectorsList (){

        const dashboardPageSelectors = {
            dashBoardGrid: ".orangehrm-dashboard-grid"
        }
        return dashboardPageSelectors
    }
    checkDashboardPage (){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashBoardGrid)
    }

}

export default DashboardPage



