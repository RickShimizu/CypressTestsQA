const loginPageSelectors = {
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    loginButtom: ".oxd-button",
    wrongCredentialAlert: "[role='alert']"
}

class LoginPage{

       

    accessLoginPage (){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    loginWithUser (username, password){
        cy.get(loginPageSelectors.userNameField).type(username)
        cy.get(loginPageSelectors.passwordField).type(password)
        cy.get('.oxd-button').click()
    }



}

export default LoginPage