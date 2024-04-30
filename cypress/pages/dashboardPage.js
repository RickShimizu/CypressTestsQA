const dashboardPageSelectors = {
    dashBoardGrid: ".orangehrm-dashboard-grid"
}

class DashboardPage {

    checkDashboardPage (){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(dashboardPageSelectors.dashBoardGrid)
    }

}

export default DashboardPage



