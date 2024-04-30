import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"

const loginPage = new LoginPage();
const dashboardPage =  new DashboardPage();

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

describe('Orange HRM Test', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })

})