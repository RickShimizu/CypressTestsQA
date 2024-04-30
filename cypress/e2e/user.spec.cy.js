import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MyInfoPage from "../pages/myInfoPage"
import MenuPage from "../pages/menuPage"

var Chance = require('chance');

var chance = new Chance();


const menuPage = new MenuPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {

  const selectorList = {
    // userNameField: "[name='username']",
    // passwordField: "[name='password']",
    // loginButtom: ".oxd-button",
    // wrongCredentialAlert: "[role='alert']",

    // sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    // dashBoardGrid: ".orangehrm-dashboard-grid",


    // myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    // firstNameField:"[name='firstName']" ,
    // lastNameField: "[name='lastName']",
    // genericField: ".oxd-input--active",
    // dateField: "[placeholder='yyyy-dd-mm']",
    // dateCloseButtom: ".--close",
    // submitButton: "[type='submit']",
    // genericSelectDropbox:".oxd-select-text--active",
    // selectFirstContent: ".oxd-select-dropdown > :nth-child(3)",
    // selectSecondContent: ".oxd-select-dropdown > :nth-child(3)"
  }
  
  const userData = {
    userSuccess : {
      username: "Admin",
      password: "admin123"
    },
    userFail : {
      username: "teste",
      password: "teste"
    }
  }
  it.only('User info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyinfo()
    myInfoPage.fillPersonalDetails(chance.first(),chance.last())
    myInfoPage.fillEmpoyeeDetails(chance.integer({ min: 0, max: 20 }),chance.integer({ min: 0, max: 20 })
    ,chance.integer({ min: 0, max: 20 }),"1997-19-09")
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
   

    // myInfoPage.fillUpForms("rick","inada","engineer","other","4","1997-19-09")
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.get(selectorList.userNameField).type(userData.userSuccess.username)
    // cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    // cy.get('.oxd-button').click()

    // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // cy.get(selectorList.dashBoardGrid)

    // cy.get(selectorList.myInfoButton).click()
    // cy.get(selectorList.firstNameField).clear().type("FirstNameTest")
    // cy.get(selectorList.lastNameField).clear().type("LastNameTest")
    // cy.get(selectorList.genericField).eq(3).clear().type("Employee")
    // cy.get(selectorList.genericField).eq(4).clear().type("othrer")
    // cy.get(selectorList.genericField).eq(5).clear().type("IDTest")
    // cy.get(selectorList.genericField).eq(6).clear().type("1997-19-09")
    // cy.get(selectorList.dateCloseButtom).click()
    // // cy.get(selectorList.submitButton).eq(0).click()
    // // cy.get('body').should('contain', 'Successfully Updated')
    // // cy.get(".oxd-toast-close")
    // cy.get(selectorList.genericSelectDropbox).eq(0).click()
    // cy.get(selectorList.selectFirstContent).click()
    // cy.get(selectorList.genericSelectDropbox).eq(1).click()
    // cy.get(selectorList.selectSecondContent).click()

    

  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAccessInvalid()
    
  })

})