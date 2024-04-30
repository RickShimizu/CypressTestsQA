class LoginPage{

    selectorsList(){

        const loginPageSelectors = {
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            loginButtom: ".oxd-button",
            wrongCredentialAlert: "[role='alert']"
        }
        return loginPageSelectors
    }
       

    accessLoginPage (){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    loginWithUser (username, password){
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get('.oxd-button').click()
    }

    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }



}

export default LoginPage