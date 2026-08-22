var studentLoginForm = document.getElementById("student-login-form")

var studentId = document.getElementById("studentid")
var password = document.getElementById("password")

var studentIdError = document.getElementById("studentid-error")
var passwordError = document.getElementById("password-error")


studentLoginForm.addEventListener("submit", function (event) {

    event.preventDefault()

    studentIdError.textContent = ""
    passwordError.textContent = ""

    var valid = true


    if (studentId.value.trim() === "") {

        studentIdError.textContent = "Student ID is required"
        valid = false
    }


    if (password.value.trim() === "") {

        passwordError.textContent = "Password is required"
        valid = false
    }


    if (valid) {

        window.location.href = "index.html"
    }

})