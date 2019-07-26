
function Empty() {
  
    let Name = document.getElementById('name').value
    let adress = document.getElementById('adress').value

    let email = document.getElementById('email').value

    let password = document.getElementById('password').value

    let comments = document.getElementById('comments').value

    if (Name.length === 0 || adress.length === 0 || email.length === 0 || password.length === 0) {
        alert("please fill in all the empty fields")

    }


    if (Name.length === 0) {
        document.getElementById('name').style.border = "2px solid red"
    }

    else {
        document.getElementById('name').style.border = "2px solid green"
    }
    if (adress.length === 0) {
        document.getElementById('adress').style.border = "2px solid red"
    }
    else {
        document.getElementById('adress').style.border = "2px solid green"
    }

    if (email.length === 0) {
        document.getElementById('email').style.border = "2px solid red"
    }
    else {
        document.getElementById('email').style.border = "2px solid green"
    }

    if (password.length === 0) {
        document.getElementById('password').style.border = "2px solid red"
    }
    else {
        document.getElementById('password').style.border = "2px solid green"
    }

}

document.getElementById("send").addEventListener("click", Empty);

function passwordValidation() {
    let password = document.getElementById('password').value
    if (password.length > 0) {

        let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")

        let password = document.getElementById('password').value
        if (!regexPassword.test(password)) {

            alert("The password must has at least than 8 characters and must be a combination of charatacters , numbers ,at least one special character and at least a capital letter.")
            document.getElementById('password').style.border = "2px solid red"
        }

        else {
            document.getElementById('password').style.border = "2px solid green"
        }

    }
}
document.getElementById("send").addEventListener("click", passwordValidation);


function emailValidation() {

    let email = document.getElementById('email').value
    if (email.length > 0) {
        let regexEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        let email = document.getElementById('email').value
        if (!regexEmail.test(email)) {
            alert("this is not a valid e-mail adress")
            document.getElementById('email').style.border = "2px solid red"

        }
        else {
            document.getElementById('email').style.border = "2px solid green"
        }


    }
}
document.getElementById("send").addEventListener("click", emailValidation);
