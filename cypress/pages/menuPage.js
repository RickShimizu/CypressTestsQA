
const menuInfoSelectors = {
    searchButton:"[placeholder='Search']",
    adminButton:"[href='/web/index.php/admin/viewAdminModule']",
    pinButton:"[href='/web/index.php/pim/viewPimModule']",
    leaveButton:"[href='/web/index.php/leave/viewLeaveModule']",
    timeButton:"[href='/web/index.php/time/viewTimeModule']",
    recruitmentButton:"[href='/web/index.php/recruitment/viewRecruitmentModule']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    performanceButton:"[href='/web/index.php/performance/viewPerformanceModule']",
    dashboardButton:"[href='/web/index.php/dashboard/index']",
    maintenanceButton:"[href='/web/index.php/maintenance/viewMaintenanceModule']",
    claimButton:"[href='/web/index.php/claim/viewClaimModule']",
    buzzButton:"[href='/web/index.php/buzz/viewBuzz']",

}

class MenuInfo {

    accessAdmin (){
        cy.get(menuInfoSelectors.adminButton).click()
    }

    accessPin (){
        cy.get(menuInfoSelectors.pinButton).click()
    }

    accessLeave (){
        cy.get(menuInfoSelectors.leaveButton).click()
    }

    accessTime (){
        cy.get(menuInfoSelectors.timeButton).click()
    }

    accessRecruitment (){
        cy.get(menuInfoSelectors.recruitmentButton).click()
    }

    accessMyinfo (){
        cy.get(menuInfoSelectors.myInfoButton).click()
    }

    accessPerformance (){
        cy.get(menuInfoSelectors.performanceButton).click()
    }

    accessDashboard (){
        cy.get(menuInfoSelectors.dashboardButton).click()
    }

    accessMaintenance (){
        cy.get(menuInfoSelectors.maintenanceButton).click()
    }

    accessClaim (){
        cy.get(menuInfoSelectors.claimButton).click()
    }

    accessBuzz (){
        cy.get(menuInfoSelectors.buzzButton).click()
    }

    


}

export default MenuInfo