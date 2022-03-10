import { InputCommon } from './common/inputCommon.js'
import { inputCheckBox } from './common/inputCheckBox.js';
import { setScreen } from './index.js'
import { Register } from './register.js'

class Login {
    container = document.createElement("div")
    title = document.createElement("h2")

    formlogin = document.createElement("form")
    inputEmail = new InputCommon("Email: ", "email", "Enter your email", "inputEmail")
    inputPassword = new InputCommon("Password: ", "password", "Enter your password", "inputPassword")

    actionContainer = document.createElement("div")
    lableCheckBox = document.createElement('span');
    inputCheckBox = new inputCheckBox('checkbox', 'remember', 'Remember me');
    

    btnLogin = document.createElement("button")
    btnRegister = document.createElement("button")



    constructor() {
        this.title.innerHTML = "Login"
        this.title.classList.add('title');

        this.container.appendChild(this.formlogin)
        this.inputEmail.container.classList.add('text');
        this.inputPassword.container.classList.add('text');
        this.formlogin.classList.add('formlogin');
        this.lableCheckBox.innerHTML = "Remember me";
        this.lableCheckBox.classList.add('check');

        this.formlogin.appendChild(this.title)
        this.formlogin.appendChild(this.inputEmail.container)
        this.formlogin.appendChild(this.inputPassword.container)
        this.formlogin.appendChild(this.inputCheckBox.container);


        this.btnLogin.innerHTML = "Login"
        this.btnRegister.innerHTML = "register"
        this.btnLogin.classList.add('button');
        this.btnRegister.classList.add('button');
        this.inputCheckBox.container.appendChild(this.lableCheckBox);
        this.inputCheckBox.container.classList.add('check');



        this.btnLogin.addEventListener("click", (e) => {
            e.preventDefault()
            const emailValue = this.inputEmail.getValue();

            if (!emailValue) {
                this.inputEmail.setErrorMessage("Email cannot be empty")
            } else {
                this.inputEmail.setErrorMessage("")
            }
            const passwordValue = this.inputPassword.getValue();

            if (!passwordValue) {
                this.inputPassword.setErrorMessage("password cannot be empty")
            } else {
                this.inputPassword.setErrorMessage("")
            }
        })
        this.btnRegister.addEventListener("click", this.handleRedirectRegister)


        this.formlogin.appendChild(this.btnLogin)
        this.formlogin.appendChild(this.btnRegister)
    }

    handleRedirectRegister = (e) => {
        e.preventDefault()
        const registerScreen = new Register()
        setScreen(registerScreen.container)
    }
}


export { Login }


