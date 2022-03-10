import { InputCommon } from './common/inputCommon.js'
import { inputCheckBox } from './common/inputCheckBox.js';
import { setScreen } from './index.js'
import { Login } from './login.js'

class Register {
    container = document.createElement("div")
    title = document.createElement("h2")

    formregister = document.createElement("form")
    inputName = new InputCommon("Name: ", "name", "Enter your name", "inputName")
    inputEmail = new InputCommon("Email: ", "email", "Enter your email", "inputEmail")
    inputPassword = new InputCommon("Password: ", "password", "Enter your password", "inputPassword")
    inputConfirmpassword = new InputCommon("Confirm password: ", "password", "Enter your confirm password", "inputConfirmpassword")
    lableCheckBox = document.createElement('span');
    inputCheckBox = new inputCheckBox('checkbox', 'remember', 'Agree statement');

    actionContainer = document.createElement("div")
    btnLogin = document.createElement("button")
    btnRegister = document.createElement("button")

    constructor() {
        this.title.innerHTML = "Register"
        this.title.classList.add('title');

        this.container.appendChild(this.formregister)
        this.lableCheckBox.innerHTML = "I agree all statement in terms of service";
        this.lableCheckBox.classList.add('check');


        this.formregister.appendChild(this.title)
        this.formregister.appendChild(this.inputName.container)
        this.formregister.appendChild(this.inputEmail.container)
        this.formregister.appendChild(this.inputPassword.container)
        this.formregister.appendChild(this.inputConfirmpassword.container)
        this.formregister.classList.add('formregister');
        this.inputName.container.classList.add('text');
        this.inputPassword.container.classList.add('text');
        this.inputEmail.container.classList.add('text');
        this.inputConfirmpassword.container.classList.add('text');
        this.formregister.appendChild(this.inputCheckBox.container);
        this.inputCheckBox.container.appendChild(this.lableCheckBox);
        this.inputCheckBox.container.classList.add('check');




        this.btnLogin.innerHTML = "Login"
        this.btnRegister.innerHTML = "Register"
        this.btnLogin.classList.add('button');
        this.btnRegister.classList.add('button');

        this.btnLogin.addEventListener("click", (e) => {
            e.preventDefault()
            const loginScreen = new Login()
            setScreen(loginScreen.container)
        })
        this.btnRegister.addEventListener("click", (e) => {
            e.preventDefault()
            const nameValue = this.inputName.getValue();

            if (!nameValue) {
                this.inputName.setErrorMessage("Name cannot be empty")
            } else {
                this.inputName.setErrorMessage("")
            }
            const emailValue = this.inputEmail.getValue();

            if (!emailValue) {
                this.inputEmail.setErrorMessage("Email cannot be empty")
            } else {
                this.inputEmail.setErrorMessage("")
            }
            const passwordValue = this.inputPassword.getValue();

            if (passwordValue.length < 6) {
                this.inputPassword.setErrorMessage("Password length must be greater or equal than 6!")
            } else {
                this.inputPassword.setErrorMessage("")
            }
            const confirmpasswordValue = this.inputConfirmpassword.getValue();

            if (confirmpasswordValue != passwordValue) {
                this.inputConfirmpassword.setErrorMessage("Confirm password not matched!")
            } else {
                this.inputConfirmpassword.setErrorMessage("")
            }
            console.log("Register");
        })


        this.formregister.appendChild(this.btnLogin)
        this.formregister.appendChild(this.btnRegister)
    }
}

export { Register }